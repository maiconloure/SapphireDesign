import React from 'react'
import styled from 'styled-components'

import { Button, Input, Title } from 'capstone'
import 'capstone/dist/index.css'

const App = () => {
  const handleOnClick = () => {
    console.log('FUNCIONOU')
  }
  return (
    <AppContainer>
      <Title fontSize='4rem'>Capstone Project</Title>
      <Title fontSize='2rem'>Library Components</Title>
      <Button onClick={handleOnClick}>Get Started</Button>
      <Input type='text' placeholder='Capstone Project' />
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
  background-color: #3b8ef6;
`
