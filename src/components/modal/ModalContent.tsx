import { ModalCommonProps } from "@/components/modal/type"
import { useModal } from "./ModalContext"
import ModalPortal from "./ModalPortal"
import styled from "styled-components"

const ModalContent = ({ children }: ModalCommonProps) => {
  const { isOpen, onClose } = useModal()

  if (!isOpen) return null

  return (
    <ModalPortal>
      <Wrapper>
        <Overlay onClick={onClose} aria-hidden="true" />
        <Container>{children}</Container>
      </Wrapper>
    </ModalPortal>
  )
}
export default ModalContent

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s;
`

const Container = styled.div`
  position: relative;
  z-index: 50;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`
