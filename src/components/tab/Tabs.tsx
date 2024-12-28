import { useState, ReactNode } from "react"
import { TabContext } from "./TabContext"
import { TabList, Tab } from "./TabComponents"

type TabsProps = {
  children: ReactNode
  defaultTab: number
}

type TabsComponent = React.FC<TabsProps> & {
  List: typeof TabList
  Tab: typeof Tab
}

const Tabs: TabsComponent = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>
}

Tabs.List = TabList
Tabs.Tab = Tab

export { Tabs }
