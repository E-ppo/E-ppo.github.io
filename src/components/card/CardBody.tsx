import React, { HTMLAttributes } from "react"
import { BaseCardProps } from "@/components/card/type"
import styled from "styled-components"

const ALIGN_STYLES = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
} as const

type AlignType = keyof typeof ALIGN_STYLES

interface CardBodyType extends BaseCardProps, Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  contentAlign?: AlignType
}

export const CardBody = ({ children, contentAlign = "middle", ...rest }: CardBodyType) => {
  return (
    <Container $contentAlign={ALIGN_STYLES[contentAlign]} {...rest}>
      {children}
    </Container>
  )
}

const Container = styled.div<{ $contentAlign: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $contentAlign }) => $contentAlign};
`
