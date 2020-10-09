import React, { useState } from 'react'
import styled from 'styled-components'

interface FeedProps {
  array: any
  font?: string
  title?: string
  titleSize?: string
  titleWeight?: number
  fontSize?: string
  weight?: number
  color?: string
  width?: string
  height?: string
  minHeight?: string
}

const Feed = ({
  array,
  font = 'Roboto',
  title = 'Inter',
  titleSize = '1.2rem',
  titleWeight = 700,
  fontSize = '1rem',
  weight = 500,
  color = '#014D82',
  width = '280px',
  height = '450px',
  minHeight = '30px'
}: FeedProps) => {
  const [minimize, setMinimize] = useState(false)
  return (
    <FeedContainer width={width} height={minimize ? minHeight : height}>
      <TopContainer>
        <FeedTitle font={title} titleSize={titleSize} titleWeight={titleWeight}>
          <h2>Notificações recentes</h2>
        </FeedTitle>
        <Minimize onClick={() => setMinimize(!minimize)}> - </Minimize>
      </TopContainer>
      {minimize ? (
        <div />
      ) : (
        <InnerBox>
          {array.map((item: any, index: any) => (
            <NewUpdate key={index}>
              <Text
                font={font}
                fontSize={fontSize}
                color={color}
                weight={weight}
              >
                {item}
              </Text>
            </NewUpdate>
          ))}
        </InnerBox>
      )}
    </FeedContainer>
  )
}

export default Feed

const FeedContainer = styled.div<{
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #3aa6f2;
  border-radius: 4px;
  padding: 10px;
`
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FeedTitle = styled.div<{
  font: string
  titleSize: string
  titleWeight: number
}>`
  background: #fff;
  border-radius: 4px;
  height: 30px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  width: 87%;

  h2 {
    font-family: ${(props) => props.font};
    font-weight: ${(props) => props.titleWeight};
    font-size: ${(props) => props.titleSize};
    color: #014d82;
    margin: 0;
    margin-left: 6px;
  }
`

const Minimize = styled.div`
  width: 11%;
  background: #fff;
  border-radius: 4px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 2rem Inter;

  &:active {
    box-shadow: 0 0 0 5px rgba(2, 19, 60, 0.3);
    transform: scale(0.9);
  }
`
const ScrollBar = styled.div`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-corner {
    background-color: #0d96f7;
  }

  ::-webkit-scrollbar-track {
    background-color: #014d82;
    border-radius: 0 4px 4px 0;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-color: #0d96f7;
    border: 4px solid #014d82; /* creates padding around scroll thumb */

    :active {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`

const InnerBox = styled(ScrollBar)`
  background: #fff;
  width: 100%;
  height: 88%;
  border-radius: 4px;
  padding-top: 8px;
  overflow: auto;
  overflow-x: hidden;
`

const NewUpdate = styled.div`
  max-width: 90%;
  min-height: 30px;
  border-radius: 6px;
  background: #cdd9e2;
  margin: 8px 14px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 10px;
`

const Text = styled.p<{
  font: string
  fontSize: string
  weight: number
  color: string
}>`
  font-family: ${(props) => props.font}, Helvetica, sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: 0;
`
