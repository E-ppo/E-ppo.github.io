import { Tabs } from "@/components/tab/Tabs"
import styled from "styled-components"

const NaviList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
] as const

const Header = () => {
  const handleChange = (index: number) => {
    console.log(index)
  }

  return (
    <Container>
      <span>로고자리</span>
      <Tabs defaultTab={1} onChange={handleChange}>
        <Tabs.List>
          {NaviList.map((item, index) => (
            <Tabs.Tab key={item.name} value={index}>
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
