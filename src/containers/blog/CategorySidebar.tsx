import { Dispatch } from "react"
import styled from "styled-components"

const categoryList = [
  { name: "React", path: "react" },
  { name: "React Native", path: "reactNative" },
  { name: "Test Code", path: "testCode" },
] as const

type SidebarProps = {
  category: string
  setCategory: Dispatch<React.SetStateAction<string>>
}

const CategorySidebar = ({ category, setCategory }: SidebarProps) => {
  const handleClick = (value: string) => {
    setCategory(value)
  }

  return (
    <Container>
      {categoryList.map((item) => (
        <CategoryText
          onClick={() => handleClick(item.path)}
          $activeCategory={category === item.path}
        >
          {item.name}
        </CategoryText>
      ))}
    </Container>
  )
}

export default CategorySidebar

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 13vw;
  min-width: 150px;
  flex-direction: column;
  justify-content: center;
`

const CategoryText = styled.p<{ $activeCategory: boolean }>`
  color: ${({ $activeCategory, theme }) =>
    $activeCategory ? theme.colors.brand.default : theme.colors.black};

  &:hover {
    color: ${({ theme, $activeCategory }) => !$activeCategory && theme.colors.brand.light};
    cursor: pointer;
  }
`
