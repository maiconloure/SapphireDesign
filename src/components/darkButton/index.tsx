import * as React from 'react'
import styled from 'styled-components'

interface DarkButtonProps {
  children: string | number
  onClick?: () => void
}

const DarkButton = ({ children, onClick }: DarkButtonProps) => {
  return <DarkBtn onClick={onClick}>{children}</DarkBtn>
}

export default DarkButton

const DarkBtn = styled.button`
  width: 260px;
  height: 85px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  color: #0089ff;
  border-radius: 8px;
  background-color: #232323;
  transition: 0.2s;
  box-shadow: 1px 1px 6px black;

  &:hover {
    box-shadow: 1px 1px 14px black;
    color: #00437d;
  }

  &:active {
    box-shadow: none;
    color: #0089ff;
  }
`
