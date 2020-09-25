import * as React from 'react'
import styled from 'styled-components'

interface InputProps {
  type: string
  placeholder?: string
  inputWidth?: any
  inputHeight?: any
}

const InputLite = ({
  type,
  placeholder,
  inputWidth,
  inputHeight
}: InputProps) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      inputWidth={inputWidth}
      inputHeight={inputHeight}
    />
  )
}

export default InputLite

const InputContainer = styled.input<{
  inputWidth: number
  inputHeight: number
}>`
  width: ${(props) => `${props.inputWidth}px`};
  height: ${(props) => `${props.inputHeight}px`};
  border: none;
  outline: none;
  margin-left: 10px;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: #3b8ef6;
  border-radius: 4px;
  background-color: #fff;
  padding: 0px;
  transition: 0.2s;
  border: 0.5px solid rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 1px 10px 8px rgba(29, 37, 112, 0.15);
  }

  &:active {
    box-shadow: none;
  }
`
