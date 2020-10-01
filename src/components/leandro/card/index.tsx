import * as React from 'react'
import styled from 'styled-components'
import CloseButton from '../../christopher/closeButton'

interface Props {
  children?: string | React.ReactNode
  title?: string
  titleSize?: string
  titleUnderline?: string
  boxWidth?: string
  topSpacing?: string
  leftSpacing?: string
  fontColor?: string
  avatars?: ImageProps[]
  handleClick?(user: string): any
  closeable?: boolean
  backgroundColor?: string
  borderDetails?: string

  data?: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ]
}

interface ImageProps {
  image: string
  user: string
}

const Card = ({
  children,
  title,
  titleSize = '1.8rem',
  titleUnderline = '2px solid #014D82',
  boxWidth = 'fit-content',
  topSpacing = '0',
  leftSpacing = '0',
  fontColor = '#0089ff',
  avatars = [{ image: '', user: '' }],
  handleClick = () => {},
  data = [true, () => {}],
  closeable = false,
  backgroundColor = 'rgba(30, 30, 30, 0.7)',
  borderDetails = '2px solid #111'
}: Props) => {
  const [boolean, callback] = data

  return (
    <Box
      style={{
        width: boxWidth,
        marginTop: topSpacing,
        marginLeft: leftSpacing,
        background: backgroundColor,
        border: borderDetails
      }}
    >
      <ButtonAdjuster>
        {closeable && (
          <CloseButton
            data={[callback]}
            styles={{
              position: 'right-out-top',
              size: 'largest',
              bgColorPrimary: 'transparent',
              bgColorSecondary: 'transparent',
              colorPrimary: fontColor
            }}
          >
            _
          </CloseButton>
        )}
      </ButtonAdjuster>
      <TitleContainer>
        <Title
          style={{
            fontSize: titleSize,
            color: fontColor,
            borderBottom: titleUnderline
          }}
        >
          {title}
        </Title>
      </TitleContainer>
      {boolean && (
        <Content>
          <AvatarsContainer>
            {avatars &&
              avatars.map(({ image, user }: ImageProps) => {
                return (
                  <Image
                    src={image}
                    title={user}
                    onClick={() => handleClick(user)}
                  />
                )
              })}
          </AvatarsContainer>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Content>
      )}
    </Box>
  )
}

export default Card

const Box = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background: rgba(30, 30, 30, 0.7);

  position: relative;
  display: flex;
  flex-flow: column;

  z-index: 3;
  height: fit-content;
  padding: 1vh 2vw 1vh 2vw;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
`

const TitleContainer = styled.div`
  width: 100%;
`

const Title = styled.h1`
  font-family: 'Inter', Helvetica, sans-serif;
  font-weight: 600;
  width: fit-content;
  padding-bottom: 4px;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Image = styled.img`
  width: 3rem;
  border-radius: 900px;
  margin: 1px;

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

const ButtonAdjuster = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`

const AvatarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`

const ChildrenContainer = styled.div`
  padding: 0;
  margin-top: 28px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
`
