import * as React from 'react'
import styled from 'styled-components'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

interface PasswordInputProps {
  name?: string
  placeholder?: string
  font?: string
  fontSize?: string
  weight?: number
  color?: string
  width?: string
  height?: string
  value?: string
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = ({
  name = 'password',
  placeholder = ' ',
  value = '',
  font = 'Inter',
  fontSize = '2.2rem',
  weight = 500,
  color = '#014D82',
  width = '220px',
  height = '30px',
  onTextChange = () => {}
}: PasswordInputProps) => {
  const [type, setType] = React.useState('password')
  return (
    <PassWord>
      <Inpt
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        font={font}
        fontSize={fontSize}
        weight={weight}
        color={color}
        width={width}
        height={height}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(event)
        }
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
  margin-right: 10px;
  display: flex;
  align-items: center;
`

const Inpt = styled.input<{
  font: string
  fontSize: string
  weight: number
  color: string
  width: string
  height: string
  // onChange: () => void
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  outline: none;
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-radius: 3px;
  background-color: #fff;
  transition: 0.2s;

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
const OpenEye = styled(ImEye)<{
  fontSize: string
  color: string
}>`
  width: ${(props) => props.fontSize};
  margin-left: -36px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s;
`
const CloseEye = styled(ImEyeBlocked)<{
  fontSize: string
  color: string
}>`
  width: ${(props) => props.fontSize};
  margin-left: -36px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.2s;
`
