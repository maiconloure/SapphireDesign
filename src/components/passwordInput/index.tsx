import * as React from 'react'
import styled from 'styled-components'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

interface PasswordInputProps {
  placeholder?: string
  font?: string
  fontSize?: string
  color?: string
  width?: string
  height?: string
}

const PasswordInput = ({
  placeholder = ' ',
  font = 'Inter',
  fontSize = '1rem',
  color = '#014D82',
  width = '220px',
  height = '30px'
}: PasswordInputProps) => {
  const [type, setType] = React.useState('password')
  return (
    <PassWord>
      <Inpt
        type={type}
        placeholder={placeholder}
        font={font}
        fontSize={fontSize}
        color={color}
        width={width}
        height={height}
      />
      {type === 'password' ? (
        <CloseEye
          fontSize={fontSize}
          color={color}
          onClick={() => setType('text')}
        />
      ) : (
        <OpenEye
          fontSize={fontSize}
          color={color}
          onClick={() => setType('password')}
        />
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

const Inpt = styled.input<{
  font: string
  fontSize: string
  color: string
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  outline: none;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  color: #3b8ef6;
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
const OpenEye = styled(ImEye)<{
  fontSize: string
  color: string
}>`
  width: ${(props) => props.fontSize};
  margin-left: -32px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s;
`
const CloseEye = styled(ImEyeBlocked)<{
  fontSize: string
  color: string
}>`
  width: ${(props) => props.fontSize};
  margin-left: -32px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s;
`
