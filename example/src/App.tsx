import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './assets/thumb.jpg'
import joker from './images/joker.jpg'
import {
  Logo,
  Button,
  DarkButton,
  ActionButton,
  Input,
  PasswordInput,
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
      <SubContainer>
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
      </SubContainer>

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
const SubContainer = styled.div`
  margin-top: 180px;
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
