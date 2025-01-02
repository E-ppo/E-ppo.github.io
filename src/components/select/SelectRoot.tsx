import { SelectContext } from "@/components/select/SelectContext"
import { SelectContainer } from "@/components/select/styles"
import { SelectItem } from "@/components/select/types"
import React, { useState, useRef, useEffect, ReactNode } from "react"

interface SelectRootProps {
  children: ReactNode
  items: SelectItem[]
  placeholder?: string
  style?: React.CSSProperties
  onChange?: (item: SelectItem) => void
  defaultValue: SelectItem
}

export const SelectRoot: React.FC<SelectRootProps> = ({
  children,
  items,
  placeholder = "Select an option",
  style,
  onChange,
  defaultValue,
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(defaultValue || null)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleSelectItem = (item: SelectItem) => {
    setSelectedItem(item)
    onChange?.(item)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <SelectContext.Provider
      value={{
        selectedItem,
        setSelectedItem: handleSelectItem,
        isOpen,
        setIsOpen,
        items,
        placeholder,
      }}
    >
      <SelectContainer style={style} ref={ref}>
        {children}
      </SelectContainer>
    </SelectContext.Provider>
  )
}
