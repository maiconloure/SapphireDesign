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
  width: 170px;
  height: 55px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 10px;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #3b8ef6;
  border-radius: 6px;
  background-color: #fff;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 0px 8px rgba(255, 255, 255, 0.1);
    color: #00437d;
  }

  &:active {
    box-shadow: none;
    color: #3b8ef6;
  }
`
