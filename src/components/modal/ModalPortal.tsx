"use client"
import { ModalCommonProps } from "@/components/modal/type"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const ModalPortal = ({ children }: ModalCommonProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return createPortal(children, document.body)
}
export default ModalPortal
