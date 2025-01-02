import { Label } from "@/components/select/styles"
import React, { ReactNode } from "react"

export const SelectLabel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Label>{children}</Label>
}
