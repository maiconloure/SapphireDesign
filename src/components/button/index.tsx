import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: string | number
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{children}</Btn>
}

export default Button

const Btn = styled.button`
  width: 260px;
  height: 85px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  color: #3b8ef6;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 0px 10px rgba(255, 255, 255, 0.1);
    color: #000080;
  }

  &:active {
    box-shadow: none;
    color: #3b8ef6;
  }
`
