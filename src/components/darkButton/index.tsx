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
  width: 170px;
  height: 55px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 10px;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #0089ff;
  border-radius: 6px;
  background-color: #232323;
  transition: 0.2s;
  box-shadow: 1px 1px 8px #2d2d2d;

  &:hover {
    box-shadow: 1px 1px 10px #2d2d2d;
    color: #000080;
  }

  &:active {
    box-shadow: none;
    color: #0089ff;
  }
`
