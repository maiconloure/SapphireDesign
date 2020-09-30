import * as React from 'react'
import styled from 'styled-components'

interface CardProps {
  imgHeight?: any
  roundImage?: any
  src?: string
  imgPosition?: any
  Ypos?: any
  Xpos?: any
  XMargin?: any
}

const PlanImage = ({
  imgHeight,
  roundImage,
  src,
  imgPosition,
  Ypos,
  Xpos,
  XMargin
}: CardProps) => {
  return (
    <ImageComponent
      src={src}
      roundImage={roundImage}
      imgHeight={imgHeight}
      imgPosition={imgPosition}
      Ypos={Ypos}
      Xpos={Xpos}
      XMargin={XMargin}
    />
  )
}

export default PlanImage

export const ImageComponent = styled.img<{
  imgHeight: number
  roundImage: string
  imgPosition: string
  Ypos: number
  Xpos: number
  XMargin: number
}>`
  position: ${(props) => `${props.imgPosition}`};
  bottom: ${(props) => `${props.Ypos}px`};
  left: ${(props) => `${props.Xpos}px`};
  margin: ${(props) => `0px ${props.XMargin}px`};
  alt: 'image';
  max-width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  height: ${(props) => `${props.imgHeight}px`};
  border-radius: ${(props) => `${props.roundImage}`};
`
