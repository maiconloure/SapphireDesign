import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  imgHeight?: any
  roundImage?: any
  src?: string
}

const ImageLite = ({ imgHeight, roundImage, src }: CardProps) => {
  return (
    <ImageComponent src={src} roundImage={roundImage} imgHeight={imgHeight} />
  )
}

export default ImageLite

export const ImageComponent = styled.img<{
  imgHeight: number
  roundImage: string
}>`
  alt: 'image';
  max-width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  height: ${(props) => `${props.imgHeight}px`};
  border-radius: ${(props) => `${props.roundImage}`};
`
