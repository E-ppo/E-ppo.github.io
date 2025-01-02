import styled from "styled-components"

export const SelectContainer = styled.div`
  position: relative;
  width: 320px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`

export const Trigger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: white;
  z-index: 10;
`

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`
