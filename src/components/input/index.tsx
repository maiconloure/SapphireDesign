import * as React from 'react'
import styled from 'styled-components'

interface InputProps {
  type: string
  placeholder?: string
}

const Input = ({ type, placeholder }: InputProps) => {
  return <Inpt type={type} placeholder={placeholder} />
}

export default Input

const Inpt = styled.input`
  width: 300px;
  border: none;
  outline: none;
  margin: 20px 0;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: #3b8ef6;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 8px;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 1px 10px 8px rgba(29, 37, 112, 0.15);
  }

  &:active {
    box-shadow: none;
  }
`
