import { useContext } from "react"
import { TabContext } from "./TabContext"
import { ChildrenProps } from "@/components/tab/type"
import styled from "styled-components"

interface TabListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    ChildrenProps {}

interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    ChildrenProps {
  value: number
}

export const TabList = ({ children, style }: TabListProps) => (
  <TabListContainer style={style}>{children}</TabListContainer>
)

export const Tab = ({ children, value, style }: TabProps) => {
  const { activeTab, setActiveTab } = useContext(TabContext)
  return (
    <TabButton onClick={() => setActiveTab(value)} $activeTab={activeTab === value} style={style}>
      {children}
    </TabButton>
  )
}

const TabListContainer = styled.div`
  display: flex;
  gap: 1rem;
`
const TabButton = styled.button<{ $activeTab: boolean }>`
  ${({ theme }) => theme.getFont("text", "sm")}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ $activeTab, theme }) =>
    $activeTab ? theme.colors.brand.default : theme.colors.black};
  border: none;

  &:hover {
    color: ${({ theme, $activeTab }) => !$activeTab && theme.colors.brand.light};
    cursor: pointer;
  }
`
