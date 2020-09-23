import * as React from 'react'
import styled from 'styled-components'

interface TitleProps {
  children: string | number
  fontSize?: string
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
  color: #000;
  transition: 0.2s;

  /* &:hover {
    box-shadow: 1px 1px 0px 10px rgba(255, 255, 255, 0.1);
    color: #000080;
  }

  &:active {
    box-shadow: none;
    color: #3b8ef6;
  } */
`
