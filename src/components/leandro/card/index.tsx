import * as React from 'react'
import styled from 'styled-components'
import CloseButton from '../../christopher/closeButton'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  children?: string | React.ReactNode
  title?: string
  titleSize?: string
  titleUnderline?: string
  titleUnderlineOffset?: string
  titleMarginBottom?: string
  boxWidth?: string
  boxPadding?: string
  topSpacing?: string
  leftSpacing?: string
  fontColor?: string
  avatars?: ImageProps[]
  handleClick?(user: string): any
  closeable?: boolean
  backgroundColor?: string
  borderDetails?: string
  avatarWidth?: string
  clickOnBox?: any
  titleOnChange?: any
  closeDataPass?: [
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
  titleUnderlineOffset = '4px',
  titleMarginBottom = '0',
  boxWidth = 'fit-content',
  boxPadding = '1vh 2vw 1vh 2vw',
  topSpacing = '0',
  leftSpacing = '0',
  fontColor = '#0089ff',
  avatars = [{ image: '', user: '' }],
  handleClick = () => {},
  closeDataPass = [true, () => {}],
  closeable = false,
  backgroundColor = 'rgba(30, 30, 30, 0.7)',
  avatarWidth = '50px',
  clickOnBox = () => {},
  titleOnChange = () => {}
}: Props) => {
  const [showCard, closeCallback] = closeDataPass

  return (
    <div>
      {showCard && (
        <Box
          onClick={clickOnBox}
          style={{
            width: boxWidth,
            marginTop: topSpacing,
            marginLeft: leftSpacing,
            background: backgroundColor,
            padding: boxPadding
          }}
        >
          <div>
            {closeable && (
              <CloseButtonAdjuster>
                <CloseButton
                  data={[closeCallback]}
                  styles={{
                    position: 'right-out-top',
                    size: 'largest',
                    bgColorPrimary: 'transparent',
                    bgColorSecondary: 'transparent',
                    colorPrimary: fontColor
                  }}
                >
                  <AiOutlineClose />
                </CloseButton>
              </CloseButtonAdjuster>
            )}
          </div>
          <TitleContainer style={{ marginBottom: titleMarginBottom }}>
            <Title
              value={title}
              onChange={titleOnChange}
              style={{
                fontSize: titleSize,
                color: fontColor,
                paddingBottom: titleUnderlineOffset,
                borderBottom: titleUnderline
              }}
            />
          </TitleContainer>
          <Content>
            <AvatarsContainer>
              {avatars &&
                avatars.map(({ image, user }: ImageProps, key: number) => {
                  return (
                    <Image
                      key={key}
                      src={image}
                      title={user}
                      width={avatarWidth}
                      onClick={() => handleClick(user)}
                    />
                  )
                })}
            </AvatarsContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
          </Content>
        </Box>
      )}
    </div>
  )
}

export default Card

const Box = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;

  z-index: 3;
  height: fit-content;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
`

const TitleContainer = styled.div`
  width: 100%;
`

const Title = styled.input`
  font-family: 'Inter';
  outline: none;
  background: transparent;
  color: #014d82;
  font-weight: 700;
  width: fit-content;
  border: none;
`

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Image = styled.img<{ width?: any }>`
  width: ${({ width }) => width || '50px'};

  border-radius: 900px;
  margin: 1px;

  &:hover {
    transition: 0.4s;
    transform: scale(1.1);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  &:active {
    transition: 0.2s;
    transform: scale(1);
  }
`

const CloseButtonAdjuster = styled.div`
  position: absolute;
  top: 24px;
  right: 16px;
`

const AvatarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`

const ChildrenContainer = styled.div`
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
`
