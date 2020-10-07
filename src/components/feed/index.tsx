import * as React from 'react'
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
}

const Feed = ({
  array,
  font = 'Roboto',
  title = 'Inter',
  titleSize = '2rem',
  titleWeight = 700,
  fontSize = '1.4rem',
  weight = 500,
  color = '#014D82',
  width = '280px',
  height = '450px'
}: FeedProps) => {
  return (
    <FeedContainer width={width} height={height}>
      <FeedTitle font={title} titleSize={titleSize} titleWeight={titleWeight}>
        <h2>Notificações recentes</h2>
      </FeedTitle>
      <InnerBox>
        {array.map((item: any, index: any) => (
          <NewUpdate key={index}>
            <Text font={font} fontSize={fontSize} color={color} weight={weight}>
              {item}
            </Text>
          </NewUpdate>
        ))}
      </InnerBox>
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

  h2 {
    font-family: ${(props) => props.font};
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.fontSize};
    color: #014d82;
    margin: 0;
    margin-left: 6px;
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
