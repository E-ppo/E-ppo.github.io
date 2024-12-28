"use client"

import { cloneElement } from "react"
import { useModal } from "./ModalContext"
import { ModalCommonProps } from "@/components/modal/type"

const ModalTrigger = ({ children }: ModalCommonProps) => {
  const { onOpen } = useModal()
  return cloneElement(children as React.ReactElement, { onClick: onOpen })
}

export default ModalTrigger
