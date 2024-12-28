import React from "react"
import { BaseCardProps } from "@/components/card/type"

export const CardTitle: React.FC<BaseCardProps> = ({ children }) => {
  return <h3>{children}</h3>
}
