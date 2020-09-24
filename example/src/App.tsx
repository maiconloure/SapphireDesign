import React from 'react'
import styled from 'styled-components'
import joker from './images/joker.jpg'

import {
  Button,
  DarkButton,
  ActionButton,
  Input,
  Title,
  Card,
  Strong
} from 'capstone'
import 'capstone/dist/index.css'

const App = () => {
  const handleOnClick = () => {
    console.log('FUNCIONOU')
  }

  const imageClick = () => {
    console.log('deu bom.')
  }

  return (
    <AppContainer>
      <Card
        title='The Joker'
        titleSize='48px'
        boxWidth='36vw'
        topSpacing='10vh'
        leftSpacing='30vw'
        imageImport={joker}
        fontColor='#869198'
        onClick={imageClick}
      >
        Lorem ipsum dolor sit amet, <Strong>consectetur</Strong> adipiscing
        elit, sed do eiusmod tempor <Strong>incididunt</Strong> ut labore et
        dolore magna aliqua.
      </Card>
      <Title fontSize='4rem'>Capstone Project</Title>
      <Title fontSize='2rem'>Library Components</Title>
      <Input type='text' placeholder='Capstone Project' />
      <Button onClick={handleOnClick}>Get Started</Button>
      <DarkButton onClick={handleOnClick}>Get Started</DarkButton>
      <ActionButton label='Add Component' />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #018ef5;
`
