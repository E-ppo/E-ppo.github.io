import { SelectContextType } from "@/components/select/types"
import { createContext } from "react"

export const SelectContext = createContext<SelectContextType | undefined>(undefined)
