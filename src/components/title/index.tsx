import * as React from 'react'
import styled from 'styled-components'

interface TitleProps {
  children: string | number
  fontSize?: any
  color?: any
}

const Title = ({ children, fontSize, color }: TitleProps) => {
  return (
    <TitleStyle fontSize={fontSize} color={color}>
      {children}
    </TitleStyle>
  )
}

export default Title

const TitleStyle = styled.h1<{ fontSize: string; color: string }>`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontSize};
  margin: 5px 0;
  color: ${(props) => (props.color ? props.color : '#fff')};
  transition: 0.2s;
`
