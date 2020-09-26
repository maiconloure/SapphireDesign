import * as React from 'react'
import styled from 'styled-components'

interface InputProps {
  type: string
  placeholder?: string
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <BasicInput>
      <Inpt type={type} placeholder={placeholder} />
    </BasicInput>
  )
}

export default Input

const BasicInput = styled.div`
  width: 240px;
  padding: 10px;
`

const Inpt = styled.input`
  width: 220px;
  /* margin-left: 10px; */
  border: none;
  outline: none;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  color: #3b8ef6;
  border-radius: 3px;
  background-color: #fff;
  padding: 10px 10px;
  transition: 0.2s;

  &::placeholder {
    color: #3b8ef6;
  }

  &:hover {
    box-shadow: 1px 1px 10px 8px rgba(29, 37, 112, 0.15);
  }

  &:active {
    box-shadow: none;
  }
`
