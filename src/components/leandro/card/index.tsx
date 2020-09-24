import * as React from 'react'
import styled from 'styled-components'

interface Props {
  children: string | React.ReactNode
  title?: string
  titleSize?: string
  boxWidth: string
  topSpacing?: string
  leftSpacing?: string
  fontColor?: string
  imageImport?: string
  imageAlt?: string
  onClick?: () => void
}

const Card = ({
  children,
  title,
  titleSize = '1.8rem',
  boxWidth,
  topSpacing = '0',
  leftSpacing = '0',
  fontColor = '#00ff98',
  imageImport,
  imageAlt,
  onClick
}: Props) => {
  return (
    <Box
      style={{
        width: boxWidth,
        marginTop: topSpacing,
        marginLeft: leftSpacing
      }}
    >
      <Title style={{ fontSize: titleSize }}>{title}</Title>
      <Content>
        <Image src={imageImport} alt={imageAlt} onClick={onClick} />
        <Paragraph style={{ color: fontColor }}>{children}</Paragraph>
      </Content>
    </Box>
  )
}

export default Card

const Box = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(30, 30, 30, 0.7);

  display: flex;
  flex-flow: column;

  z-index: 3;
  min-height: 20vh;
  height: fit-content;
  padding: 2vh 3vw 2vh 3vw;
  border-radius: 8px;
  border: 2px solid #111;
  box-shadow: 0 3px 6px black;
  box-sizing: border-box;
  position: relative;
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
    transition: 0.4s;
    transform: scale(1.1);
    box-shadow: 1px 1px 14px black;
    cursor: pointer;
  }

  &:active {
    transition: 0.2s;
    transform: scale(1);
  }
`

const Paragraph = styled.p`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  background: rgba(30, 30, 30, 0.75);
  padding: 1.2rem;
  line-height: 1.6rem;
  margin-top: 48px;
  border-radius: 8px;
`
