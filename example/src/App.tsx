import React from 'react'
import styled from 'styled-components'

import {
  Logo,
  Button,
  DarkButton,
  ActionButton,
  Input,
  Title,
  PasswordInput
} from 'capstone'

import logo from './assets/thumb.jpg'
const App = () => {
  const handleOnClick = () => {
    console.log('FUNCIONOU')
  }
  return (
    <AppContainer>
      <Logo image={logo} />
      <Title fontSize='3.8rem'>Sapphire Design</Title>
      <Title fontSize='1.6rem' color='#000'>
        Library Components
      </Title>
      <Input type='text' placeholder='Let the games begin' />
      <PasswordInput placeholder='Enter the password' />
      <Button onClick={handleOnClick}>Login</Button>
      <DarkButton onClick={handleOnClick}>Register</DarkButton>
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
