import React, { useState } from 'react'
import styled from 'styled-components'
import joker from './images/joker.jpg'

import {
  Button,
  DarkButton,
  ActionButton,
  Input,
  Title,
  // ModalLeandro,
  CardLeandro,
  Strong,
  Modal,
  CloseButton
} from 'capstone'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOnClick = () => {
    console.log('FUNCIONOU')
    setShowModal(true)
  }

  const imageClick = () => {
    console.log('deu bom.')
    setShowModal(false)
  }

  return (
    <AppContainer>
      <Title fontSize='4rem'>Capstone Project</Title>
      <Title fontSize='2rem'>Library Components</Title>
      <Input type='text' placeholder='Capstone Project' />
      <Button onClick={handleOnClick}>Get Started</Button>
      <DarkButton onClick={handleOnClick}>Get Started</DarkButton>
      <ActionButton label='Add Component' />

      <Container>
        <CardLeandro
          title='The Joker'
          titleSize='48px'
          boxWidth='36vw'
          imageImport={joker}
          fontColor='#869198'
          onClick={imageClick}
        >
          Lorem ipsum dolor sit amet, <Strong>consectetur</Strong> adipiscing
          elit, sed do eiusmod tempor <Strong>incididunt</Strong> ut labore et
          dolore magna aliqua.
        </CardLeandro>
      </Container>

      <Modal
        title='Login'
        toggleModal={{ showModal, setShowModal }}
        styles={{ size: 'bigger', fontSize: 'bigger' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Input type='text' placeholder='Your Email' />
          <Input type='password' placeholder='Your Password' />
          <Button onClick={handleOnClick}>Login</Button>
        </div>
      </Modal>
      <Test>
        <CloseButton
          styles={{
            position: 'right',
            size: 'big'
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
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #018ef5;
`

const Container = styled.div`
  /* position: absolute; */
  /* z-index: 2; */
  top: 10vh;
  left: 20vw;
  margin: 20px;
`

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  margin: 20px;
`
