import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode | JSX.Element
  innerFlexContent?: any
}

const InnerContainerLite = ({ children, innerFlexContent }: CardProps) => {
  return (
    <InnerContainerComponent innerFlexContent={innerFlexContent}>
      {children}
    </InnerContainerComponent>
  )
}

export default InnerContainerLite

export const InnerContainerComponent = styled.div<{ innerFlexContent: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => `${props.innerFlexContent}`};
`
