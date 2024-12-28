import { Tabs } from "@/components/tab/Tabs"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NaviList = [
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
] as const

const Header = () => {
  const navegation = useNavigate()

  const handleChange = (path: string) => {
    navegation(path)
  }

  return (
    <Container>
      <span onClick={() => navegation("/")}>🌸</span>
      <Tabs defaultTab={NaviList[0].path} onChange={handleChange}>
        <Tabs.List>
          {NaviList.map((item) => (
            <Tabs.Tab key={item.name} value={item.path}>
              {item.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`
