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

  toggleModal: {
    showModal: boolean
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
  maxWidth: 70,
  maxHeight: 50,
  fontSize: '',
  size: ''
}

const Modal = ({ styles, title, children, toggleModal }: Props) => {
  const { showModal, setShowModal } = toggleModal
  const newStyles = { ...StyleDefaultState, ...styles }

  return (
    <Shadow showModal={showModal}>
      <StyledModal styles={newStyles} showModal={showModal}>
        <CloseButton
          toggleModal={{ showModal, setShowModal }}
          styles={{ position: 'right', size: newStyles.fontSize }}
        />
        <Title styles={newStyles}>{title}</Title>
        <Container styles={newStyles}>{children}</Container>
      </StyledModal>
    </Shadow>
  )
}

export default Modal

const Shadow = styled.div<{ showModal: boolean }>`
  ${(props) =>
    props.showModal &&
    `
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: #0009;
    transition: 0.2s;
    `}
`

const StyledModal = styled.div<{ styles?: any; showModal: boolean }>`
  background-color: ${(props) => props.styles.bgColorPrimary};
  color: ${(props) => props.styles.colorPrimary};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: content-box;

  border-radius: 10px;
  outline: none;
  border: none;
  padding: 3px;
  z-index: 9999;
  transition: 0.2s;

  ${(props) =>
    props.styles.size === 'big'
      ? `
      min-width: 450px;
      max-width: 600px;
      min-height: 500px;
      `
      : props.styles.size === 'bigger'
      ? `
      min-width: 750px;
      max-width: 1200px;
      min-height: 800px;
      `
      : props.styles.size === 'normal'
      ? `
      min-width: 300px;
      max-width: 350px;
      min-height: 400px;
      `
      : props.styles.size === 'mini'
      ? `
      min-width: 250px;
      max-width: 320px;
      min-height: 300px;
      `
      : `
      `}

  ${(props) =>
    props.showModal
      ? 'opacity: 1; pointer-events: auto;'
      : `opacity: 0; left: -750px`}
`

const Title = styled.h1<{ styles?: any }>`
  position: absolute;
  text-overflow: ellipsis;
  left: 5px;
  top: 0px;
  margin: 5px;
  overflow: hidden;
  ${(props) =>
    props.styles.fontSize === 'big'
      ? `
      font-size: 45px;
      `
      : props.styles.fontSize === 'bigger'
      ? `
      font-size: 55px;
      `
      : props.styles.fontSize === 'normal'
      ? `
      font-size: 30px;
      `
      : props.styles.fontSize === 'mini'
      ? `
      font-size: 20px;
      `
      : `
      `}

  ${(props) =>
    props.styles.size === 'big'
      ? `
      width: 400px;
      `
      : props.styles.size === 'bigger'
      ? `
      width: 700px;
      `
      : props.styles.size === 'normal'
      ? `
      width: 270px;
      `
      : props.styles.size === 'mini'
      ? `
      width: 220px;
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
  margin-top: ${(props) =>
    ['bigger', 'big'].includes(props.styles.fontSize) ? `75px` : `40px`};
  display: content-box;
  max-height: ${(props) => props.styles.maxHeight}vh;
  padding: 50px;
`
