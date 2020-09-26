import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | number
  innerFlexContent?: any
}

const InnerContainer = ({ children, innerFlexContent }: CardProps) => {
  return (
    <InnerContainerComponent innerFlexContent={innerFlexContent}>
      {children}
    </InnerContainerComponent>
  )
}

export default InnerContainer

export const InnerContainerComponent = styled.div<{ innerFlexContent: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => `${props.innerFlexContent}`};
`
