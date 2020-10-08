import * as React from 'react'
import { IconType } from 'react-icons/lib'
import styled from 'styled-components'

interface Props {
  children?: string | number | IconType | React.ReactNode

  styles?: {
    colorPrimary?: string
    colorSecondary?: string
    colorComplementary?: string
    bgColorPrimary?: string
    bgColorSecondary?: string
    bgColorComplementary?: string
    position?: string
    size?: string
  }

  data: [
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ]
}

const StyleDefaultState = {
  colorPrimary: 'transparent',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#0002',
  bgColorComplementary: '#00437d',
  position: '',
  size: ''
}

const CloseButton = ({ children = 'X', styles, data }: Props) => {
  const [callback] = data

  return (
    <XButton
      // eslint-disable-next-line standard/no-callback-literal
      onClick={() => callback(false)}
      styles={{ ...StyleDefaultState, ...styles }}
    >
      {children}
    </XButton>
  )
}

export default CloseButton

const XButton = styled.div<{ styles?: any }>`
  color: ${(props) => props.styles.colorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  cursor: pointer;
  outline: none;

  img {
    width: 35px;
  }

  ${(props) =>
    props.styles.position === 'left'
      ? `
        left: 0px;
        top: 0px;
      `
      : props.styles.position === 'right'
      ? `
        right: 0px;
        top: 0px;
      `
      : props.styles.position === 'left-out-top'
      ? `
        left: -12px;
        top: -18px;
        `
      : props.styles.position === 'right-out-top'
      ? `
        right: -12px;
        top: -18px;
        `
      : props.styles.position === 'left-out-bottom'
      ? `
        left: -12px;
        bottom: -10px;
        `
      : props.styles.position === 'right-out-bottom'
      ? `
        right: -12px;
        bottom: -10px;
        `
      : `
  `}

  ${(props) =>
    props.styles.size === 'small'
      ? `
        width: 18px;
        line-height: 15px;
        font-size: 10px;
      `
      : props.styles.size === 'medium'
      ? `
        width: 25px;
        line-height: 22px;
        font-size: 14px;
        `
      : props.styles.size === 'large'
      ? `
        width: 34px;
        line-height: 32px;
        font-size: 16px;
        `
      : props.styles.size === 'largest'
      ? `
        width: 48px;
        line-height: 45px;
        font-size: 21px;
        `
      : `
        width: 25px;
        line-height: 22px;
  `}

  :active {
    opacity: 0.6;
  }
`
