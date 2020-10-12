import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children?: string | number
  font?: string
  fontSize?: string
  weight?: number
  color?: string
  background?: string
  width?: string
  height?: string
  radius?: string
  onClick?: () => void
}

const Button = ({
  children = '',
  font = 'Inter',
  fontSize = '1.4rem',
  weight = 700,
  color = '#014D82',
  background = '#fff',
  width = '170px',
  height = '55px',
  radius = '6px',
  onClick
}: ButtonProps) => {
  return (
    <Btn
      font={font}
      fontSize={fontSize}
      color={color}
      background={background}
      width={width}
      height={height}
      onClick={onClick}
      weight={weight}
      radius={radius}
    >
      {children}
    </Btn>
  )
}

export default Button

const Btn = styled.button<{
  font: string
  fontSize: string
  weight: number
  color: string
  background: string
  width: string
  height: string
  radius: string
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
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.background};
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
