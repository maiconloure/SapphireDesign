import * as React from 'react'
import styled from 'styled-components'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

interface PasswordInputProps {
  placeholder?: string
}

const PasswordInput = ({ placeholder }: PasswordInputProps) => {
  const [type, setType] = React.useState('password')
  return (
    <PassWord>
      <Inpt type={type} placeholder={placeholder} />
      {type === 'password' ? (
        <CloseEye onClick={() => setType('text')} />
      ) : (
        <OpenEye onClick={() => setType('password')} />
      )}
    </PassWord>
  )
}

export default PasswordInput

const PassWord = styled.div`
  width: 240px;
  padding: 10px;
  display: flex;
  align-items: center;
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
const OpenEye = styled(ImEye)`
  width: 20px;
  height: 20px;
  margin-left: -32px;
  color: #3b8ef6;
  cursor: pointer;
  transition: 0.2s;
`
const CloseEye = styled(ImEyeBlocked)`
  width: 20px;
  height: 20px;
  margin-left: -32px;
  color: #3b8ef6;
  cursor: pointer;
  transition: 0.2s;
`
