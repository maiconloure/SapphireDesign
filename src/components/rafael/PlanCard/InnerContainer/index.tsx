import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode | JSX.Element
  innerFlexContent?: any
  innerFlexDirection?: any
  innerWidth?: any
  innerPadding?: any
}

const PlanInnerContainer = ({
  children,
  innerFlexContent,
  innerFlexDirection,
  innerWidth,
  innerPadding
}: CardProps) => {
  return (
    <InnerContainerComponent
      innerFlexContent={innerFlexContent}
      innerFlexDirection={innerFlexDirection}
      innerWidth={innerWidth}
      innerPadding={innerPadding}
    >
      {children}
    </InnerContainerComponent>
  )
}

export default PlanInnerContainer

export const InnerContainerComponent = styled.div<{
  innerFlexContent: string
  innerFlexDirection: string
  innerWidth: number
  innerPadding: number
}>`
  display: flex;
  flex-direction: ${(props) => `${props.innerFlexDirection}`};
  width: ${(props) => `${props.innerWidth}%`};
  padding: ${(props) => `${props.innerPadding}px`};
  justify-content: ${(props) => `${props.innerFlexContent}`};
`
