import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Button,
  DarkButton,
  ActionButton,
  Input,
  Title,
  Modal,
  CloseButton
} from 'capstone'

const App = () => {
  const [showModal, setShowModal] = useState(true)

  const handleOnClick = () => {
    console.log('FUNCIONOU')
    setShowModal(true)
  }

  return (
    <AppContainer>
      <Title fontSize='4rem'>Capstone Project</Title>
      <Title fontSize='2rem'>Library Components</Title>
      <Input type='text' placeholder='Capstone Project' />
      <Button onClick={handleOnClick}>Get Started</Button>
      <DarkButton onClick={handleOnClick}>Get Started</DarkButton>
      <ActionButton label='Add Component' />
      <Modal
        title='Login'
        toggleModal={{ showModal, setShowModal }}
        styles={{size: 'bigger', fontSize: 'bigger'}}
      >
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <Input type='text' placeholder='Your Email' />
          <Input type='password' placeholder='Your Password' />
          <Button onClick={handleOnClick}>Login</Button>
        </div>
      </Modal>
      <Test>
        <CloseButton
          styles={{
            position: '',
            size: 'bigger'
          }}
          toggleModal={{ showModal, setShowModal }}
        />
      </Test>
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

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
`
