import { BaseCardProps } from "@/components/card/type"
import React from "react"

export const CardDescription: React.FC<BaseCardProps> = ({ children }) => {
  return <p>{children}</p>
}
