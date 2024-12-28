import { Tabs } from "@/components/tab/Tabs"
import styled from "styled-components"

const Header = () => {
  return (
    <Container>
      <span>로고자리</span>
      <Tabs defaultTab={1}>
        <Tabs.List>
          <Tabs.Tab value={0}>About</Tabs.Tab>
          <Tabs.Tab value={1}>Portfolio</Tabs.Tab>
          <Tabs.Tab value={2}>Blog</Tabs.Tab>
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
