import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  blankSpace?: any
}

const BlankSpaceLite = ({ blankSpace }: CardProps) => {
  return <Space blankSpace={blankSpace} />
}

export default BlankSpaceLite

export const Space = styled.div<{ blankSpace: number }>`
  height: ${(props) => `${props.blankSpace}px`};
`
