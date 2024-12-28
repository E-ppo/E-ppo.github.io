import React from "react"
import { BaseCardProps } from "@/components/card/type"

export const CardBody: React.FC<BaseCardProps> = ({ children }) => {
  return <div>{children}</div>
}
