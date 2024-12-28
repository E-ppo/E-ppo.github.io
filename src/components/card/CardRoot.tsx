import { BaseCardProps } from "@/components/card/type"
import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface CardRootProps extends BaseCardProps, Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  direction?: "row" | "column"
}
export const CardRoot: React.FC<CardRootProps> = ({ children, style, direction = "column" }) => {
  return (
    <Container style={style} $direction={direction}>
      {children}
    </Container>
  )
}

const Container = styled.div<{
  $direction: "column" | "row"
}>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === "column" ? "column" : "row")};
`
