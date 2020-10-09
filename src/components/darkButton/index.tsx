import * as React from 'react'
import styled from 'styled-components'

interface DarkButtonProps {
  children?: string | number
  font?: string
  fontSize?: string
  weight?: number
  color?: string
  width?: string
  height?: string
  onClick?: () => void
}

const DarkButton = ({
  children = '',
  font = 'Inter',
  fontSize = '1.4rem',
  weight = 700,
  color = '#0089ff',
  width = '170px',
  height = '55px',
  onClick
}: DarkButtonProps) => {
  return (
    <DarkBtn
      font={font}
      fontSize={fontSize}
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      weight={weight}
    >
      {children}
    </DarkBtn>
  )
}

export default DarkButton

const DarkBtn = styled.button<{
  font: string
  fontSize: string
  weight: number
  color: string
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  outline: none;
  cursor: pointer;
  font-family: ${(props) => props.font}, Helvetica, sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-radius: 6px;
  background-color: #232323;
  transition: 0.2s;
  box-shadow: 1px 1px 8px #2d2d2d;

  &:hover {
    box-shadow: 1px 1px 10px #2d2d2d;
    color: #add8e6;
  }

  &:active {
    box-shadow: none;
    color: #483d8b;
  }
`
