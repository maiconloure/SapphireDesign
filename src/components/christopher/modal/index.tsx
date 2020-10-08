import * as React from 'react'
import styled from 'styled-components'
import CloseButton from '../closeButton'

interface Props {
  title: string

  children: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >

  button?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

  styles?: {
    colorPrimary?: string
    colorSecondary?: string
    colorComplementary?: string
    bgColorPrimary?: string
    bgColorSecondary?: string
    bgColorComplementary?: string
    maxWidth?: number
    maxHeight?: number
    fontSize: string
    size?: string
  }

  data: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ]
  icon?: any
}

const StyleDefaultState = {
  colorPrimary: '#ffc200',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#00437d',
  bgColorComplementary: '#00437d',
  maxWidth: 70,
  maxHeight: 50,
  fontSize: '',
  size: ''
}

const Modal = ({ styles, title, children, data, icon }: Props) => {
  const [boolean, callback] = data
  const newStyles = { ...StyleDefaultState, ...styles }

  return (
    <StyledModal styles={newStyles} showModal={boolean}>
      <CloseButton
        data={[callback]}
        styles={{ position: 'right', size: newStyles.fontSize }}
      >
        <img src={icon} alt='close icon' />
      </CloseButton>
      <Title styles={newStyles}>{title}</Title>
      <Container styles={newStyles}>{children}</Container>
    </StyledModal>
  )
}

export default Modal

const StyledModal = styled.div<{ styles?: any; showModal: boolean }>`
  background-color: ${(props) => props.styles.bgColorPrimary};
  color: ${(props) => props.styles.colorPrimary};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: content-box;
  border-radius: 6px;
  outline: none;
  border: none;
  padding: 3px;
  z-index: 9999;
  transition: 0.3s;

  ${(props) =>
    props.styles.size === 'small'
      ? `
        min-width: 250px;
        max-width: 320px;
        min-height: 300px;
      `
      : props.styles.size === 'medium'
      ? `
        min-width: 300px;
        max-width: 350px;
        min-height: 400px;
      `
      : props.styles.size === 'large'
      ? `
        min-width: 450px;
        max-width: 600px;
        min-height: 500px;
      `
      : props.styles.size === 'largest'
      ? `
        min-width: 750px;
        max-width: 1200px;
        min-height: 800px;
      `
      : `
  `}

  ${(props) =>
    props.showModal
      ? 'opacity: 1; pointer-events: auto;'
      : `opacity: 0; left: -750px
  `}
`

const Title = styled.h1<{ styles?: any }>`
  position: absolute;
  text-overflow: ellipsis;
  left: 5px;
  top: 0px;
  margin: 5px;
  overflow: hidden;

  ${(props) =>
    props.styles.fontSize === 'small'
      ? `
        font-size: 20px;
      `
      : props.styles.fontSize === 'medium'
      ? `
        font-size: 30px;
      `
      : props.styles.fontSize === 'large'
      ? `
        font-size: 45px;
      `
      : props.styles.fontSize === 'largest'
      ? `
        font-size: 55px;
      `
      : `
  `}

  ${(props) =>
    props.styles.size === 'small'
      ? `
        width: 220px;
      `
      : props.styles.size === 'medium'
      ? `
        width: 270px;
      `
      : props.styles.size === 'large'
      ? `
        width: 400px;
      `
      : props.styles.size === 'largest'
      ? `
        width: 700px;
      `
      : `
  `}
`

const ScrollBar = styled.div`
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    :active {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`

const Container = styled(ScrollBar)<{ styles?: any }>`
  overflow: auto;
  padding: 15px;
  display: content-box;

  max-height: ${(props) => props.styles.maxHeight}vh;
  margin-top: ${(props) =>
    ['large', 'largest'].includes(props.styles.fontSize) ? `75px` : `40px`};
`
