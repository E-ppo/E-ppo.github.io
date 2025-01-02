import { SelectContext } from "@/components/select/SelectContext"
import { useContext } from "react"

export const useSelect = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error("Select components must be used within SelectRoot")
  }

  return context
}
