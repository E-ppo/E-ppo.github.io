import { BaseCardProps } from "@/components/card/type"
import { HTMLAttributes } from "react"
import styled from "styled-components"

type CardDescriptionType = BaseCardProps & Omit<HTMLAttributes<HTMLParagraphElement>, "children">

export const CardDescription = ({ children, style }: CardDescriptionType) => {
  return <Description style={style}>{children}</Description>
}

const Description = styled.p`
  ${({ theme }) => theme.getFont("text", "sm")}
  white-space: pre-wrap;
  word-break: keep-all;
`
