import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: React.ReactNode | JSX.Element

  cardWidth?: any
  cardMargin?: any
  cardPadding?: any
}

const CardLite = ({
  children,
  cardWidth,
  cardMargin,
  cardPadding
}: CardProps) => {
  return (
    <CardComponent
      cardWidth={cardWidth}
      cardMargin={cardMargin}
      cardPadding={cardPadding}
    >
      {children}
    </CardComponent>
  )
}

export default CardLite

export const CardComponent = styled.div<{
  cardWidth: number
  cardMargin: number
  cardPadding: number
}>`
  width: ${(props) => `${props.cardWidth}px`};
  margin: ${(props) => `${props.cardMargin}px`};
  padding: ${(props) => `${props.cardPadding}px`};
  border-radius: 10px;
  border: 5px solid rgba(0, 0, 255, 0.1);
  background-color: #fff;
  :hover {
    border: 5px solid rgba(0, 0, 255, 0.3);
  }
  display: flex;
  flex-direction: column;
`
