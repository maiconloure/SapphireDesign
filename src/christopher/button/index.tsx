import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: string
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  background-color: grey;
  color: white;
  border: none;
  padding: 5px;

  outline: none;
  cursor: pointer;

  :active {
    opacity: 0.5;
  }
`
