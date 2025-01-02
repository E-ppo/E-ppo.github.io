import { Trigger } from "@/components/select/styles"
import { useSelect } from "@/components/select/useSelect"
import SvgIcon from "@/components/svg"
import { HTMLAttributes } from "react"

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string
}

export const SelectTrigger = ({ placeholder, style }: TriggerProps) => {
  const { selectedItem, isOpen, setIsOpen, placeholder: contextPlaceholder } = useSelect()

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Trigger onClick={toggleOpen} style={style}>
      {selectedItem ? selectedItem.label : placeholder || contextPlaceholder}
      <SvgIcon name="statMinus" style={{ transform: isOpen ? "scaleY(-1)" : "scaleY(1)" }} />
    </Trigger>
  )
}
