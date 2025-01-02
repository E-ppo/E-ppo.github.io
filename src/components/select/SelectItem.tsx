import React, { ReactNode } from "react"
import { SelectItem as SelectItemType } from "@/components/select/types"
import { useSelect } from "@/components/select/useSelect"
import { DropdownItem } from "@/components/select/styles"

interface SelectItemProps {
  children: ReactNode
  item: SelectItemType
}

export const SelectItem: React.FC<SelectItemProps> = ({ children, item }) => {
  const { setSelectedItem, setIsOpen } = useSelect()

  const handleSelect = () => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  return <DropdownItem onClick={handleSelect}>{children}</DropdownItem>
}
