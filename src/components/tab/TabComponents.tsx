import { useContext } from "react"
import { TabContext } from "./TabContext"
import { ChildrenProps } from "@/components/tab/type"

interface TabListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    ChildrenProps {}

interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    ChildrenProps {
  value: number
}

export const TabList = ({ children, style }: TabListProps) => <div style={style}>{children}</div>

export const Tab = ({ children, value, style }: TabProps) => {
  const { activeTab, setActiveTab } = useContext(TabContext)
  return (
    <button
      onClick={() => setActiveTab(value)}
      style={{ fontWeight: activeTab === value ? "bold" : "normal", ...style }}
    >
      {children}
    </button>
  )
}
