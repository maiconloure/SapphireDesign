import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  LineThickness: any
  LineColor: any
  LineHeight: any
}

const PlanLine = ({ LineThickness, LineColor, LineHeight }: CardProps) => {
  return (
    <Line
      LineThickness={LineThickness}
      LineColor={LineColor}
      LineHeight={LineHeight}
    />
  )
}

export default PlanLine

export const Line = styled.div<{
  LineThickness: number
  LineColor: string
  LineHeight: number
}>`
  border-bottom: ${(props) =>
    `${props.LineThickness}px solid  ${props.LineColor}`};
  height: ${(props) => `${props.LineHeight}px `};
`
