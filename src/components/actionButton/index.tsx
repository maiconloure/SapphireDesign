import * as React from 'react'
import styled from 'styled-components'
import { HiLightningBolt } from 'react-icons/hi'
interface ActionButtonProps {
  label: string
  onClick?: () => void
}

const ActionButton = ({ label, onClick }: ActionButtonProps) => {
  return (
    <ActionContainer>
      <ActionBtn onClick={onClick}>
        <IconBtn />
      </ActionBtn>
      <LabelBtn>{label}</LabelBtn>
    </ActionContainer>
  )
}

export default ActionButton

const ActionContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const ActionBtn = styled.button`
  width: 90px;
  height: 90px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  border-radius: 12px;
  background-image: radial-gradient(#292929 0%, #252525 100%);
  transition: 0.2s;
  box-shadow: 1px 1px 0px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 1px 1px 0px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: none;
  }
`

const IconBtn = styled(HiLightningBolt)`
  color: #ffc200;
  color: radial-gradient(#ffc200 0%, #ffc400 100%);

  width: 60px;
  height: 60px;
`

const LabelBtn = styled.p`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
  width: 10%;
  margin-left: 12px;
`
