import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | React.ReactNode | JSX.Element
  flexContent?: any
  gap?: any
  backgroundColor?: any
}

const PlanContainer = ({
  children,
  flexContent,
  gap = 5,
  backgroundColor
}: CardProps) => {
  return (
    <ContainerComponent
      flexContent={flexContent}
      gap={gap}
      backgroundColor={backgroundColor}
    >
      {children}
    </ContainerComponent>
  )
}

export default PlanContainer

export const ContainerComponent = styled.div<{
  flexContent: string
  gap: number
  backgroundColor: string
}>`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: ${(props) => `${props.flexContent}`};
  margin: ${(props) => `${props.gap}px 0px`};
  background-color: ${(props) => `${props.backgroundColor}`};
`
