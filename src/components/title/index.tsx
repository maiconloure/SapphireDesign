import * as React from 'react'
import styled from 'styled-components'

interface TitleProps {
  children: string | number
  fontSize?: any
}

const Title = ({ children, fontSize }: TitleProps) => {
  return <TitleStyle fontSize={fontSize}>{children}</TitleStyle>
}

export default Title

const TitleStyle = styled.h1<{ fontSize: string }>`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.fontSize};
  margin: 10px 0;
  color: #fff;
  transition: 0.2s;
`
