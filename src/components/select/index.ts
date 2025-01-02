// src/components/select/index.ts
import { SelectRoot } from "./SelectRoot"
import { SelectLabel } from "./SelectLabel"
import { SelectTrigger } from "./SelectTrigger"
import { SelectItem } from "./SelectItem"
import { SelectContent } from "@/components/select/SelecteContent"

const Select = SelectRoot as typeof SelectRoot & {
  Label: typeof SelectLabel
  Trigger: typeof SelectTrigger
  Content: typeof SelectContent
  Item: typeof SelectItem
}

Select.Label = SelectLabel
Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Item = SelectItem

export default Select
