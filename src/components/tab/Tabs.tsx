import { useState, ReactNode } from "react"
import { TabContext } from "./TabContext"
import { TabList, Tab } from "./TabComponents"
import { TabValue } from "@/components/tab/type"

type TabsProps<T extends TabValue> = {
  children: ReactNode
  defaultTab: T
  onChange?: (value: T) => void
}

const Tabs = <T extends TabValue>({ children, defaultTab, onChange }: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState<T>(defaultTab)

  const handleTabChange = (value: TabValue) => {
    setActiveTab(value as T)
    onChange?.(value as T)
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
