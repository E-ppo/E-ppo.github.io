import { createContext } from "react"

export type TabContextType = {
  activeTab: number
  setActiveTab: (index: number) => void
  onChange?: (index: number) => void
}

export const TabContext = createContext<TabContextType>({
  activeTab: 0,
  setActiveTab: () => {},
})
