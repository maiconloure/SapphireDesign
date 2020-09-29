import * as React from 'react'
import styled from 'styled-components'

interface InputProps {
  type: string
  placeholder?: string
  font?: string
  fontSize?: string
  weight?: number
  color?: string
  width?: string
  height?: string
}

const Input = ({
  type,
  placeholder = '',
  font = 'Inter',
  fontSize = '1rem',
  weight: 500,
  color = '#014D82',
  width = '220px',
  height = '30px'
}: InputProps) => {
  return (
    <BasicInput>
      <Inpt
        type={type}
        placeholder={placeholder}
        font={font}
        fontSize={fontSize}
        color={color}
        width={width}
        height={height}
        weight={weight}

      />
    </BasicInput>
  )
}

export default Input

const BasicInput = styled.div`
  width: 240px;
  padding: 10px;
`

const Inpt = styled.input<{
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
  font-family: ${(props) => props.font}, Helvetica, sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  border-radius: 3px;
  background-color: #fff;
  padding: 10px 10px;
  transition: 0.2s;

  &::placeholder {
    color: ${(props) => props.color};
  }

  &:hover {
    box-shadow: 1px 1px 10px 8px rgba(29, 37, 112, 0.15);
  }

  &:active {
    box-shadow: none;
  }
`
