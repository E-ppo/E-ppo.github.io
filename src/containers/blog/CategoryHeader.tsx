import { Tabs } from "@/components/tab/Tabs"
import styled from "styled-components"

const categoryList = [
  { name: "React", path: "blog" },
  { name: "React Native", path: "reactNative" },
  { name: "Test Code", path: "testCode" },
] as const

const CategoryHeader = () => {
  return (
    <Container>
      <Tabs defaultTab={categoryList[0].path}>
        <Tabs.List>
          {categoryList.map((item) => (
            <Tabs.Tab value={item.path}>{item.name}</Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Container>
  )
}

export default CategoryHeader

const Container = styled.div`
  display: flex;
  justify-content: center;
`
