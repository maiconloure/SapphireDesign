import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, DarkButton, ActionButton, Input, Title, Modal } from 'capstone'

const App = () => {
  const [showModal, setShowModal] = useState(true)
  const handleOnClick = () => {
    console.log('FUNCIONOU')
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
        title='Modsdfsadfasdasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfal'
        toggleModal={{ showModal, setShowModal }}
      >
        <div>
          <div>
            ihsasdfffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffhi
          </div>
          <div>
            ihifadssssssssssssssssssssssssssssssdfasasdffffffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>
            ihfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaisdaffffffffffffffffhi
          </div>
          <div>ihifdsaaaaaaaaaaaaaaaaaaaaahi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div> <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
          <div>ihihi</div>
        </div>
      </Modal>
      <button onClick={() => setShowModal(true)}>ShowModal</button>
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
