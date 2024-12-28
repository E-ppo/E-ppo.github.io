import { useState, ReactNode } from "react"
import { TabContext } from "./TabContext"
import { TabList, Tab } from "./TabComponents"

type TabsProps = {
  children: ReactNode
  defaultTab: number
  onChange?: (index: number) => void
}

type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabList
  Tab: typeof Tab
}

const Tabs: TabsComponent = ({ children, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const handleTabChange = (index: number) => {
    setActiveTab(index)
    if (onChange) {
      onChange(index)
    }
  }
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      {children}
    </TabContext.Provider>
  )
}

Tabs.List = TabList
Tabs.Tab = Tab

export { Tabs }
