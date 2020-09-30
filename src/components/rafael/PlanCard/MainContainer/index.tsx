import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | React.ReactNode | JSX.Element
  gap?: any
}

const PlanMainContainer = ({ children, gap = 5 }: CardProps) => {
  return <ContainerComponent gap={gap}>{children}</ContainerComponent>
}

export default PlanMainContainer

export const ContainerComponent = styled.div<{
  gap: number
}>`
  height: 100px;
  width: 100%;
  margin: ${(props) => `${props.gap}px 0px`};
  background-color: white;
  border-radius: 5px;
`
