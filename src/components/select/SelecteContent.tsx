import { DropdownContent } from "@/components/select/styles"
import { useSelect } from "@/components/select/useSelect"
import React, { ReactNode } from "react"

export const SelectContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen } = useSelect()

  if (!isOpen) return null

  return <DropdownContent>{children}</DropdownContent>
}
