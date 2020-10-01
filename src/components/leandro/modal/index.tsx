import React from 'react'
import styled from 'styled-components'
import Card from '../card'
import CloseButton from '../../christopher/closeButton'

interface Props {
  children?: string | React.ReactNode
  title?: string
  titleSize?: string
  titleUnderline?: string
  boxWidth?: string
  topSpacing?: string
  leftSpacing?: string
  fontColor?: string
  backgroundColor?: string
  borderDetails?: string

  data: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ]
}

const Modal = ({
  children,
  title,
  titleSize = '1.8rem',
  titleUnderline = 'none',
  boxWidth = 'fit-content',
  topSpacing = '0',
  leftSpacing = '0',
  fontColor = '#869198',
  data,
  backgroundColor,
  borderDetails
}: Props) => {
  const [, callback] = data

  return (
    <Background>
      <Card
        title={title}
        titleSize={titleSize}
        titleUnderline={titleUnderline}
        boxWidth={boxWidth}
        topSpacing={topSpacing}
        leftSpacing={leftSpacing}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        borderDetails={borderDetails}
      >
        <ButtonAdjuster>
          <CloseButton
            data={[callback]}
            styles={{
              position: 'right-out-top',
              size: 'largest',
              bgColorPrimary: 'transparent',
              bgColorSecondary: 'transparent',
              colorPrimary: fontColor
            }}
          />
        </ButtonAdjuster>
        {children}
      </Card>
    </Background>
  )
}

export default Modal

const Background = styled.div`
  z-index: 3;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-backdrop-filter: grayscale(80%) blur(5px);
  backdrop-filter: grayscale(80%) blur(5px);
`

const ButtonAdjuster = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
