export interface SelectItem {
  label: string
  value: string
}

export interface SelectContextType {
  selectedItem: SelectItem | null
  setSelectedItem: (item: SelectItem) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  items: SelectItem[]
  placeholder?: string
}
