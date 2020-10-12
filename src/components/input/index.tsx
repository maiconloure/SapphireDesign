import * as React from 'react'
import styled from 'styled-components'

interface InputProps {
  type: string
  value?: string
  name?: string
  placeholder?: string
  font?: string
  fontSize?: string
  weight?: number
  color?: string
  width?: string
  height?: string
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  value = '',
  name = 'fname',
  placeholder = '',
  font = 'Inter',
  fontSize = '2.2rem',
  weight = 500,
  color = '#014D82',
  width = '220px',
  height = '30px',
  onTextChange = () => {}
}: InputProps) => {
  return (
    <BasicInput>
      <Inpt
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        font={font}
        fontSize={fontSize}
        color={color}
        width={width}
        height={height}
        weight={weight}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(event)
        }
      />
    </BasicInput>
  )
}

export default Input

const BasicInput = styled.div``

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
  transition: 0.2s;
  color: ${(props) => props.color};

  &::placeholder {
    color: ${(props) => props.color};
  }

  &:hover {
    box-shadow: 0 0 1px 5px rgba(25, 25, 112, 0.2);
  }

  &:active {
    box-shadow: 0 0 2px 5px rgba(25, 25, 112, 0.2);
  }
`
