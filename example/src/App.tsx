import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from './assets/thumb.jpg'
import joker from './images/joker-face.jpg'
import napoleon from './images/napoleon-dynamite.jpg'
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
  Modal,
  CloseButton,
  CardLite,
  ContainerLite,
  ImageLite,
  InnerContainerLite,
  TextLite,
  InputLite
} from 'capstone'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [showCard, setShowCard] = useState(true)
  const history = useHistory()

  const handleOnClick = () => {
    console.log('FUNCIONOU')
    setShowModal(true)
  }

  const closeCard = () => {
    setShowCard(!showCard)
  }

  const imageClick = (user: string): void => {
    history.push(`/${user}`)
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

      <Container drag dragMomentum={false}>
        <CardLeandro
          title='Product Backlog'
          boxWidth='32vw'
          avatars={[
            { image: joker, user: 'Joker' },
            { image: napoleon, user: 'Napoleon Dynamite' }
          ]}
          fontColor='#014D82'
          handleClick={imageClick}
          closeable
          data={[showCard, closeCard]}
          backgroundColor='rgba(58, 166, 242, 0.5)'
          borderDetails='none'
        >
          <Box contentEditable='true'>Digite algo para começar ;)</Box>
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
        >
          -
        </CloseButton>
      </Test>

      <CardLite cardWidth={280} cardMargin={10} cardPadding={10}>
        <ContainerLite flexContent={'flex-start'} gap={5}>
          <ImageLite
            src={
              'https://images-americanas.b2w.io/produtos/01/00/item/17796/0/17796086_1GG.jpg'
            }
            roundImage={`${50}%`}
            imgHeight={30}
          />

          <InnerContainerLite innerFlexContent={'flex-start'}>
            <TextLite fontSize={15} Ypos={0} Xpos={10}>
              Some person
            </TextLite>
            <TextLite fontSize={10} Ypos={4} Xpos={10}>
              some date
            </TextLite>
          </InnerContainerLite>
        </ContainerLite>

        <ContainerLite flexContent={'center'} gap={5}>
          <ImageLite
            src={
              'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioKart.jpg'
            }
            imgHeight={200}
          />
        </ContainerLite>

        <ContainerLite flexContent={'flex-start'} gap={5}>
          <TextLite fontSize={12}>ANOTHER PERSON</TextLite>
        </ContainerLite>

        <ContainerLite flexContent={'space-around'} gap={10}>
          <TextLite fontSize={15} Ypos={-5}>
            "A cool comment, another cool comment , just a simple comment, i`m
            tired of typing..."
          </TextLite>
        </ContainerLite>
        <ContainerLite flexContent={'space-evenly'} gap={5}>
          <TextLite fontSize={12} cursor={'pointer'} hoverColor={'#CCC'}>
            Like!
          </TextLite>
          <TextLite fontSize={12} cursor={'pointer'} hoverColor={'#CCC'}>
            Comment!
          </TextLite>
          <TextLite fontSize={12} cursor={'pointer'} hoverColor={'#CCC'}>
            Share!
          </TextLite>
        </ContainerLite>
        <ContainerLite flexContent={'flex-start'} gap={5}>
          <ImageLite
            src={
              'https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png'
            }
            roundImage={`${50}%`}
            imgHeight={30}
          />
          <InputLite
            type={'text'}
            placeholder={'comment...'}
            inputWidth={225}
            inputHeight={30}
          />
        </ContainerLite>
      </CardLite>
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

const Box = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  padding: 10px;
  outline: none;
  font-family: 'inter', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  min-height: 100px;
  background: white;
  border-radius: 6px;
  text-align: left;
`
