import * as React from 'react'
import styled from 'styled-components'

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
    height?: number | string
    width?: number | string
    color?: string
    bgcolor?: string
  }
  toggleModal: {
    showModal: boolean
    setShowModal: (props: boolean) => void
  }
}

const StyleDefaultState = {
  height: 250,
  maxHeight: 70,
  width: 250,
  maxWidth: 70,
  colorPrimary: '#ffc200',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#00437d',
  bgColorComplementary: '#00437d'
}

const Modal = ({
  title,
  children,
  toggleModal: { showModal, setShowModal }
}: Props) => {
  return (
    <Shadow showModal={showModal}>
      <StyledModal styles={StyleDefaultState} showModal={showModal}>
        <XButton onClick={() => setShowModal(false)} styles={StyleDefaultState}>
          X
        </XButton>
        <Title styles={StyleDefaultState}>{title}</Title>
        <Container styles={StyleDefaultState}>{children}</Container>
      </StyledModal>
    </Shadow>
  )
}

export default Modal

const StyledModal = styled.button<{ styles?: any; showModal: boolean }>`
  /* <{ style?: any }> */
  background-color: ${(props) => props.styles.bgColorPrimary};
  color: ${(props) => props.styles.colorPrimary};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: content-box;
  min-width: ${(props) => props.styles.width}px;
  min-height: ${(props) => props.styles.height}px;

  border-radius: 10px;
  outline: none;
  border: none;
  padding: 3px;
  z-index: 9999;

  ${(props) =>
    props.showModal
      ? 'opacity: 1; pointer-events: auto;'
      : `opacity: 0; left: -${props.styles.width}px`}
`
const XButton = styled.button<{ styles?: any }>`
  background-color: ${(props) => props.styles.bgColorComplementary};
  color: ${(props) => props.styles.colorComplementary};
  border: 1px solid #999;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  position: absolute;
  width: 25px;
  right: -12px;
  top: -18px;
  line-height: 22px;
  margin-top: 5px;
  outline: none;

  :active {
    opacity: 0.6;
  }
`

const Title = styled.h1<{ styles?: any }>`
  position: absolute;
  text-overflow: ellipsis;
  width: ${(props) => props.styles.width - 20}px;
  left: 5px;
  top: 0px;
  margin: 5px;
  overflow: hidden;
`

const ScrollBar = styled.div`
  ::-webkit-scrollbar {
    width: 12px;
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
  margin-top: 35px;
  display: content-box;
  max-height: ${(props) => props.styles.maxHeight}vh;
  padding: 50px;
`
const Shadow = styled.div<{ showModal: boolean }>`
  ${(props) =>
    props.showModal &&
    `
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: #0009;
 `}
`
