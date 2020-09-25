import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './assets/thumb.jpg'
import joker from './images/joker.jpg'
import { motion } from 'framer-motion'
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

      <Container
        drag
        dragMomentum={false}
        // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <CardLeandro
          title='The Joker'
          titleSize='48px'
          boxWidth='32vw'
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
        data={[showModal, setShowModal]}
        styles={{ size: 'medium', fontSize: 'large' }}
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
            position: 'left',
            size: 'large'
          }}
          data={[setShowModal]}
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
const SubContainer = styled.div`
  margin-top: 180px;
`
const Container = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 0vh;
  left: 0vw;
  margin: 20px;
`

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  margin: 20px;
`
