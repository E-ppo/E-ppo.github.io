import { ModalCommonProps } from "@/components/modal/type"
import { useModal } from "./ModalContext"
import styled from "styled-components"

const ModalHeader = ({ children }: ModalCommonProps) => {
  return <Header>{children}</Header>
}

const ModalTitle = ({ children }: ModalCommonProps) => {
  return <Title>{children}</Title>
}

const ModalCloseButton = ({ children }: ModalCommonProps) => {
  const { onClose } = useModal()
  return (
    <CloseButton onClick={onClose} aria-label="Close modal">
      {children}
    </CloseButton>
  )
}

export default ModalHeader
export { ModalTitle, ModalCloseButton }

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`

const CloseButton = styled.div`
  padding: 0.25rem;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`
