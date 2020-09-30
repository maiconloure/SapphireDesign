import React from 'react'
import styled from 'styled-components'
import Card from '../card'

interface Props {
  children: string | React.ReactNode
  title?: string
  titleSize?: string
  boxWidth: string
  topSpacing?: string
  leftSpacing?: string
  fontColor?: string
}

const Modal = ({
  children,
  title,
  titleSize = '1.8rem',
  boxWidth,
  topSpacing = '0',
  leftSpacing = '0',
  fontColor = '#869198'
}: Props) => {
  return (
    <Background>
      <Card
        title={title}
        titleSize={titleSize}
        boxWidth={boxWidth}
        topSpacing={topSpacing}
        leftSpacing={leftSpacing}
        fontColor={fontColor}
      >
        {children}
      </Card>
    </Background>
  )
}

export default Modal

const Background = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-backdrop-filter: grayscale(80%) blur(5px);
  backdrop-filter: grayscale(80%) blur(5px);
`
