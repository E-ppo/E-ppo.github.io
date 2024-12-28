import { BaseCardProps } from "@/components/card/type"
import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface CardRootProps extends BaseCardProps, Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  direction?: "row" | "column"
}
export const CardRoot: React.FC<CardRootProps> = ({ children, direction = "column" }) => {
  return <Container $direction={direction}>{children}</Container>
}

const Container = styled.div<{
  $direction: "column" | "row"
}>`
  display: flex;
  background-color: gray;
  flex-direction: ${({ $direction }) => ($direction === "column" ? "column" : "row")};
`
