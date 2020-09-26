import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | React.ReactNode | JSX.Element
  flexContent?: any
  gap?: any
}

const ContainerLite = ({ children, flexContent, gap = 5 }: CardProps) => {
  return (
    <ContainerComponent flexContent={flexContent} gap={gap}>
      {children}
    </ContainerComponent>
  )
}

export default ContainerLite

export const ContainerComponent = styled.div<{
  flexContent: string
  gap: number
}>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => `${props.flexContent}`};
  margin: ${(props) => `${props.gap}px 0px`};
`
