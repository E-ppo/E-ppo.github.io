import { HTMLAttributes } from "react"
import { BaseCardProps } from "@/components/card/type"
import styled from "styled-components"

type CardTitleType = BaseCardProps & Omit<HTMLAttributes<HTMLParagraphElement>, "children">

export const CardTitle = ({ children, style }: CardTitleType) => {
  return <Title style={style}>{children}</Title>
}

const Title = styled.p`
  ${({ theme }) => theme.getFont("text", "lg")}
`
