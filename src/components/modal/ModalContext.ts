"use client"

import { ModalContextType } from "@/components/modal/type"
import { createContext, useContext } from "react"

export const ModalContext = createContext<ModalContextType | null>(null)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("바깥에서 선언하지 마세오")
  }
  return context
}
