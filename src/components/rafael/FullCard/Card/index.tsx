import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | React.ReactNode
  cardWidth?: any
  cardMargin?: any
  cardPadding?: any
  cardBorderRadius?: any
  cardBorderThickness?: any
  cardBorderLine?: any
  cardBorderColor?: any
  cardBackgroundColor?: any
  cardBackgroundExpression?: any
}

const Card = ({
  children,
  cardWidth = 280,
  cardMargin = 10,
  cardPadding = 10,
  cardBorderRadius = 10,
  cardBorderThickness = 2,
  cardBorderLine = 'solid',
  cardBorderColor = 'red',
  cardBackgroundColor,
  cardBackgroundExpression = 'linear-gradient(to bottom right,#FFF,rgba(255, 0, 0,0.2))'
}: CardProps) => {
  return (
    <CardComponent
      cardWidth={cardWidth}
      cardMargin={cardMargin}
      cardPadding={cardPadding}
      cardBorderRadius={cardBorderRadius}
      cardBorderThickness={cardBorderThickness}
      cardBorderLine={cardBorderLine}
      cardBorderColor={cardBorderColor}
      cardBackgroundColor={cardBackgroundColor}
      cardBackgroundExpression={cardBackgroundExpression}
    >
      {children}
    </CardComponent>
  )
}

export default Card

export const CardComponent = styled.div<{
  cardWidth: number
  cardMargin: number
  cardPadding: number
  cardBorderRadius: number
  cardBorderThickness: number
  cardBorderLine: string
  cardBorderColor: string
  cardBackgroundColor: string
  cardBackgroundExpression: string
}>`
  width: ${(props) => `${props.cardWidth}px`};
  margin: ${(props) => `${props.cardMargin}px`};
  padding: ${(props) => `${props.cardPadding}px`};
  border-radius: ${(props) => `${props.cardBorderRadius}px`};
  border: ${(props) =>
    `${props.cardBorderThickness}px ${props.cardBorderLine}  ${props.cardBorderColor}`};
  background-color: ${(props) => `${props.cardBackgroundColor}`};
  background-image: ${(props) => `${props.cardBackgroundExpression}`};
  display: flex;
  flex-direction: column;
`
