import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  children: string | number
  imgHeight?: any
  src?: string
  roundImage?: any
  imageBorderThickness?: any
  imageBorderLine?: any
  imageBorderColor?: any
}

const Image = ({
  children,
  src = 'https://content.money.com/wp-content/uploads/2016/05/160531_em_oldvideogames.jpg?quality=85',
  imgHeight,
  roundImage,
  imageBorderThickness,
  imageBorderLine,
  imageBorderColor
}: CardProps) => {
  return (
    <ImageComponent
      src={src}
      imgHeight={imgHeight}
      roundImage={roundImage}
      imageBorderThickness={imageBorderThickness}
      imageBorderLine={imageBorderLine}
      imageBorderColor={imageBorderColor}
    >
      {children}
    </ImageComponent>
  )
}

export default Image

export const ImageComponent = styled.img<{
  imgHeight: number
  roundImage: string
  imageBorderThickness: number
  imageBorderLine: string
  imageBorderColor: string
}>`
  alt: 'image';
  height: ${(props) => `${props.imgHeight}px`};
  max-width: 100%;
  border: ${(props) =>
    `${props.imageBorderThickness}px ${props.imageBorderLine} ${props.imageBorderColor}`};
  border-radius: ${(props) => `${props.roundImage}`};
`
