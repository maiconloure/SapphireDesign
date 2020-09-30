import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode | JSX.Element

  cardWidth?: any
  cardMargin?: any
  cardPadding?: any
  cardScale?: any
  cardBgColor?: any
  cellScale?: any
}

const PlanCard = ({
  children,
  cardWidth,
  cardMargin,
  cardPadding,
  cardScale,
  cardBgColor,
  cellScale
}: CardProps) => {
  return (
    <CardComponent
      cardWidth={cardWidth}
      cardMargin={cardMargin}
      cardPadding={cardPadding}
      cardScale={cardScale}
      cardBgColor={cardBgColor}
      cellScale={cellScale}
    >
      {children}
    </CardComponent>
  )
}

export default PlanCard

export const CardComponent = styled.div<{
  cardWidth: number
  cardMargin: number
  cardPadding: number
  cardScale: number
  cardBgColor: string
  cellScale: number
}>`
  transform: ${(props) => `scale(${props.cardScale})`};
  width: ${(props) => `${props.cardWidth}px`};
  margin: ${(props) => `${props.cardMargin}px`};
  padding: ${(props) => `${props.cardPadding}px`};
  border-radius: 5px;
  border: 5px solid rgba(0, 0, 255, 0.1);
  background-color: ${(props) => `${props.cardBgColor}`};
  :hover {
    border: 5px solid rgba(0, 0, 255, 0.3);
  }
  display: grid;
  grid-template-rows: auto 1fr auto;
  @media (max-width: 420px) {
    transform: ${(props) => `scale(${props.cellScale})`};
  }
  @media (max-height: 420px) {
    transform: ${(props) => `scale(${props.cellScale})`};
  }
`
