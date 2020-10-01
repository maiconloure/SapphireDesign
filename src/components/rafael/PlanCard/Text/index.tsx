import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | number
  fontSize?: any
  fontWeight?: number
  Ypos?: any
  Xpos?: any
  cursor?: any
  hoverColor?: any
  textAlign?: any
  backgroundColor?: any
  XPadding?: any
  height?: any
  fontStyle?: any
  fontColor?: any
}

const PlanText = ({
  children,
  fontSize,
  fontWeight = 700,
  Ypos,
  Xpos,
  cursor,
  hoverColor,
  textAlign,
  backgroundColor,
  XPadding,
  height,
  fontStyle,
  fontColor = '#014d82'
}: CardProps) => {
  return (
    <TextComponent
      fontSize={fontSize}
      fontWeight={fontWeight}
      Ypos={Ypos}
      Xpos={Xpos}
      cursor={cursor}
      hoverColor={hoverColor}
      textAlign={textAlign}
      backgroundColor={backgroundColor}
      XPadding={XPadding}
      height={height}
      fontStyle={fontStyle}
      fontColor={fontColor}
    >
      {children}
    </TextComponent>
  )
}

export default PlanText

export const TextComponent = styled.h1<{
  fontSize: string
  fontWeight: number
  Ypos: number
  Xpos: number
  cursor: string
  hoverColor: string
  textAlign: string
  backgroundColor: string
  XPadding: number
  height: number
  fontStyle: string
  fontColor: string
}>`
  color: ${(props) => `${props.fontColor}`};
  font-weight: ${(props) => `${props.fontWeight}`};
  font-style: ${(props) => `${props.fontStyle}`};
  height: ${(props) => `${props.height}px`};
  margin: 1px;
  padding: ${(props) => `0px ${props.XPadding}px`};
  font-family: 'Inter', Helvetica, sans - serif;
  position: relative;
  border-radius: 5px;
  background-color: ${(props) => `${props.backgroundColor}`};
  text-align: ${(props) => `${props.textAlign}`};
  font-size: ${(props) => `${props.fontSize}px`};
  bottom: ${(props) => `${props.Ypos}px`};
  left: ${(props) => `${props.Xpos}px`};
  cursor: ${(props) => `${props.cursor}`};
  :hover {
    color: ${(props) => `${props.hoverColor}`};
  }
`
