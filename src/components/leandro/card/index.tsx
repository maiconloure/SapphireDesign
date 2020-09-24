import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: string | React.ReactNode
  title?: string
  titleSize?: string
  boxWidth: string
  topSpacing: string
  leftSpacing: string
  fontColor?: string
  imageImport?: string
  imageAlt?: string
  onClick?: () => void
}

export default function Card({
  children,
  title,
  titleSize = '1.8rem',
  boxWidth,
  topSpacing,
  leftSpacing,
  fontColor = '#00ff98',
  imageImport,
  imageAlt,
  onClick
}: Props) {
  return (
    <Box style={{ width: boxWidth, top: topSpacing, left: leftSpacing }}>
      <Title style={{ fontSize: titleSize }}>{title}</Title>
      <Content>
        <Image src={imageImport} alt={imageAlt} onClick={onClick} />
        <Paragraph style={{ color: fontColor }}>{children}</Paragraph>
      </Content>
    </Box>
  )
}

const Box = styled.div`
  /* background-color: rgba(250, 250, 250, 0.3); */

  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(30, 30, 30, 0.75);

  display: flex;
  flex-flow: column;

  z-index: 2;
  position: absolute;
  min-height: 20vh;
  padding: 2vh 3vw 2vh 3vw;
  border-radius: 8px;
  border: 2px solid #111;
  box-shadow: 0 3px 6px black;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 200;
  color: #0089ff;
  margin-bottom: 2.4rem;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Image = styled.img`
  width: 90%;
  border: 2px solid #111;
  border-radius: 8px;

  &:hover {
    box-shadow: 1px 1px 14px black;
    cursor: pointer;
  }
`

const Paragraph = styled.p`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  /* text-shadow: 0 0 6px black; */
  line-height: 1.6rem;
  margin-top: 48px;
`
