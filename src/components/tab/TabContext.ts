import { TabValue } from "@/components/tab/type"
import { createContext } from "react"

export type TabContextType = {
  activeTab: TabValue
  setActiveTab: (index: TabValue) => void
}

export const TabContext = createContext<TabContextType>({
  activeTab: 0,
  setActiveTab: () => {},
})
