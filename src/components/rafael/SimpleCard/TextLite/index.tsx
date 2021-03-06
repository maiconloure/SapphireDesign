import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | number
  fontSize?: any
  Ypos?: any
  Xpos?: any
  cursor?: any
  hoverColor?: any
  textAlign?: any
}

const TextLite = ({
  children,
  fontSize,
  Ypos,
  Xpos,
  cursor,
  hoverColor,
  textAlign
}: CardProps) => {
  return (
    <TextComponent
      fontSize={fontSize}
      Ypos={Ypos}
      Xpos={Xpos}
      cursor={cursor}
      hoverColor={hoverColor}
      textAlign={textAlign}
    >
      {children}
    </TextComponent>
  )
}

export default TextLite

export const TextComponent = styled.h1<{
  fontSize: string
  Ypos: number
  Xpos: number
  cursor: string
  hoverColor: string
  textAlign: string
}>`
  color: #44a;
  font-weight: 700;
  margin: 1px;
  font-family: 'Inter', Helvetica, sans - serif;
  position: relative;
  text-align: ${(props) => `${props.textAlign}`};
  font-size: ${(props) => `${props.fontSize}px`};
  bottom: ${(props) => `${props.Ypos}px`};
  left: ${(props) => `${props.Xpos}px`};
  cursor: ${(props) => `${props.cursor}`};
  :hover {
    color: ${(props) => `${props.hoverColor}`};
  }
`
