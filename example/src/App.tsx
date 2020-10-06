import React, { useState } from 'react'
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
  ModalLeandro,
  CardLeandro,
  Modal,
  CloseButton,
  PlanCard,
  PlanContainer,
  PlanImage,
  PlanMainContainer,
  PlanInnerContainer,
  PlanText,
  PlanLine
} from 'capstone'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [showCard, setShowCard] = useState(true)
  const [showLeandroModal, setShowLeandroModal] = useState(false)
  // const history = useHistory()

  const handleOnClick = () => {
    console.log('FUNCIONOU')
    setShowModal(true)
  }

  const imageClick = (user: string): void => {
    console.log(user)
    setShowLeandroModal(!showLeandroModal)
  }

  const handleForm = (evt: any) => {
    console.log(evt)
  }

  return (
    <AppContainer>
      <ModalLeandro
        title='Modal do Leandro'
        fontColor='#0F89FF'
        closeDataPass={[showLeandroModal, () => setShowLeandroModal(false)]}
      >
        <Box contentEditable='true'>Digite algo para começar ;)</Box>
      </ModalLeandro>
      <SubContainer>
        <Logo image={logo} />
        <Title fontSize='3.8rem'>Sapphire Design</Title>
        <Title fontSize='1.6rem' color='#000'>
          Library Components
        </Title>
        <Input
          type='text'
          placeholder='usuário'
          color='#014D82'
          fontSize='22px'
          onTextChange={handleForm}
        />
        <PasswordInput
          placeholder='senha'
          color='#014D82'
          fontSize='22px'
          onTextChange={handleForm}
        />
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
          closeDataPass={[showCard, () => setShowCard(false)]}
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
      <PlanCard
        cardMargin={5}
        cardPadding={10}
        cardWidth={275}
        cardBgColor={'#cdd9e2'}
      >
        <PlanContainer flexContent={'space-between'} gap={0}>
          <PlanInnerContainer innerFlexDirection={'row'} innerPadding={0}>
            <PlanText fontSize={20} fontStyle={'italic'}>
              #sprint1
            </PlanText>
            <PlanImage
              src={
                'https://www.flaticon.com/svg/static/icons/svg/482/482556.svg'
              }
              imgHeight={25}
              XMargin={3}
            />
            <PlanImage
              src={'https://image.flaticon.com/icons/png/512/65/65000.png'}
              imgHeight={25}
              XMargin={3}
            />
          </PlanInnerContainer>
          <PlanText fontSize={20} fontStyle={'italic'}>
            02:00
          </PlanText>
        </PlanContainer>
        <PlanMainContainer gap={5}>
          <PlanInnerContainer
            innerFlexDirection={'column'}
            innerWidth={85}
            innerPadding={15}
          >
            <PlanText fontSize={18}>Dormir o dia inteiro</PlanText>
            <PlanText fontSize={10} Ypos={-2.5} fontStyle={'italic'}>
              Durmo mesmo quero mais é que se dane essa po*** , quero ver alguém
              falar pra eu não dormir!
            </PlanText>
          </PlanInnerContainer>
          <PlanImage
            src={
              'https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png'
            }
            imgHeight={25}
            imgPosition={'relative'}
            Xpos={245}
            Ypos={75}
          />
          <PlanImage
            src={'https://www.flaticon.com/svg/static/icons/svg/564/564619.svg'}
            imgHeight={25}
            imgPosition={'relative'}
            Xpos={235}
            Ypos={42.5}
          />
          <PlanImage
            src={
              'https://www.flaticon.com/svg/static/icons/svg/3208/3208663.svg'
            }
            imgHeight={25}
            imgPosition={'relative'}
            Xpos={195}
            Ypos={10}
          />
        </PlanMainContainer>
        <PlanContainer flexContent={'space-between'} gap={0}>
          <PlanInnerContainer innerFlexDirection={'row'} innerPadding={0}>
            <PlanImage
              src={
                'https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png'
              }
              roundImage={`${50}%`}
              imgHeight={25}
              XMargin={3}
            />
            {/* <PlanImage src={'https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png'}
              roundImage={`${50}%`} imgHeight={25} XMargin={3} />
            <PlanImage src={'https://www.acasadocogumelo.com/wp-content/uploads/2013/06/luigi2-2.png'}
              roundImage={`${50}%`} imgHeight={25} XMargin={3} /> */}
          </PlanInnerContainer>
          <PlanText
            fontSize={18}
            backgroundColor={'white'}
            XPadding={4}
            Ypos={-5}
            height={22}
            fontStyle={'italic'}
          >
            28/09
          </PlanText>
        </PlanContainer>
      </PlanCard>
      <PlanCard
        cardMargin={5}
        cardPadding={5}
        cardWidth={180}
        cardBgColor={'#E05555'}
      >
        <PlanContainer flexContent={'center'} gap={5}>
          <PlanText
            fontSize={18}
            fontStyle={'italic'}
            fontColor={'white'}
            textAlign={'center'}
          >
            Ajudou o colega?
          </PlanText>
        </PlanContainer>
        <PlanLine LineThickness={3} LineColor={'white'} LineHeight={1} />
        <PlanContainer flexContent={'center'} gap={5}>
          <PlanInnerContainer innerFlexDirection={'column'}>
            <PlanText
              fontSize={18}
              fontStyle={'italic'}
              fontColor={'white'}
              textAlign={'center'}
            >
              Quando?
            </PlanText>
            <PlanText
              fontSize={18}
              fontWeight={400}
              fontStyle={'italic'}
              fontColor={'white'}
              textAlign={'center'}
            >
              00:00
            </PlanText>
          </PlanInnerContainer>
        </PlanContainer>
      </PlanCard>
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
