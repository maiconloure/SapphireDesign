import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | number
  textColor?: any
  fontFamily?: any
  fontSize?: any
  textWidth?: any
  Ypos?: any
  Xpos?: any
  cursor?: any
  hoverColor?: any
}

const Text = ({
  children,
  textColor,
  fontFamily = "'Press Start 2P', cursive",
  fontSize,
  textWidth,
  Ypos,
  Xpos,
  cursor,
  hoverColor
}: CardProps) => {
  return (
    <TextComponent
      textColor={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textWidth={textWidth}
      Xpos={Xpos}
      Ypos={Ypos}
      cursor={cursor}
      hoverColor={hoverColor}
    >
      {children}
    </TextComponent>
  )
}

export default Text

export const TextComponent = styled.div<{
  textColor: string
  fontFamily: number
  fontSize: number
  textWidth: number
  Ypos: number
  Xpos: number
  cursor: string
  hoverColor: string
}>`
  color: ${(props) => `${props.textColor}`};
  font-family: ${(props) => `${props.fontFamily}px`};
  font-size: ${(props) => `${props.fontSize}px`};
  width: ${(props) => `${props.textWidth}px`};
  position: relative;
  bottom: ${(props) => `${props.Ypos}px`};
  left: ${(props) => `${props.Xpos}px`};
  cursor: ${(props) => `${props.cursor}`};
  :hover {
    color: ${(props) => `${props.hoverColor}`};
  }
`
