import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children?: string | number

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

  toggleModal: {
    showModal?: boolean
    setShowModal: (props: boolean) => void
  }
}

const StyleDefaultState = {
  colorPrimary: '#ffc200',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#00437d',
  bgColorComplementary: '#00437d',
  position: '',
  size: ''
}

const CloseButton = ({
  children,
  styles,
  toggleModal: { setShowModal }
}: Props) => {
  return (
    <XButton
      onClick={() => setShowModal(false)}
      styles={{ ...StyleDefaultState, ...styles }}
    >
      {children || 'X'}
    </XButton>
  )
}

export default CloseButton

const XButton = styled.button<{ styles?: any }>`
  background-color: ${(props) => props.styles.bgColorComplementary};
  color: ${(props) => props.styles.colorComplementary};
  border: 1px solid #999;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  cursor: pointer;
  outline: none;

  ${(props) =>
    props.styles.position === 'left'
      ? `
        left: -12px;
        top: -18px;
        `
      : props.styles.position === 'left-bottom'
      ? `
        left: -12px;
        bottom: -10px;
        `
      : props.styles.position === 'right'
      ? `
        right: -12px;
        top: -18px;
        `
      : props.styles.position === 'right-bottom'
      ? `
        right: -12px;
        bottom: -10px;
        `
      : ``}

  ${(props) =>
    props.styles.size === 'big'
      ? `
        width: 34px;
        line-height: 32px;
        font-size: 16px;
        `
      : props.styles.size === 'bigger'
      ? `
        width: 48px;
        line-height: 45px;
        font-size: 21px;
        `
      : props.styles.size === 'mini'
      ? `
        width: 18px;
        line-height: 15px;
        font-size: 10px;
        `
      : `
        width: 25px;
        line-height: 22px;
        `}

  :active {
    opacity: 0.6;
  }
`
