# Sapphire Design

this is a `Kenzie Academy Brazil` Project

- **Note: this project is create by [Leandro Koller](https://www.linkedin.com/in/leandro-eduardo-koller-49202b68/), [Christopher William](https://www.linkedin.com/in/christopher-william-4363321a5/), [Maicon Lourenço](https://www.linkedin.com/in/maiconlourenco/) e [Rafael Barlera](https://www.linkedin.com/in/rafael-barlera-0a839191/), see more about!**

## Learn More About [Kenzie Academy](https://kenzie.com.br/)

Somos uma escola norte-americana que veio para o Brasil com o objetivo de ofertar ensino de qualidade para quem deseja trabalhar na área da tecnologia. Temos como foco o aprendizado do aluno, desde o nível técnico de um programador full stack, até soft-skills para entrar no mercado de trabalho.

## Christopher Components Lib

i have create 2 components, one close button and one modal to be use in my applications

to user import

```javascript
import { Modal, CloseButton } from 'capstone'
```

you can use a json obj to modify the modal or the close button

`Modal DATA need to receive a array of 2 elements, the first is a boolean the second is a function callback to set the boolean to false to close the modal, because the modal use the component CloseButton`

`CloseButton DATA need to only one function callback in the array`

```javascript
import React, { useState } from 'react'
import { Modal, CloseButton } from 'capstone'

const divTestCloseButtonStyles = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
  position: 'relative',
  margin: '20px'
}

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Modal
        title='Modal Title'
        data={[showModal, setShowModal]}
        styles={{ size: 'medium', fontSize: 'large' }}
      >
        <div>Your Content Here</div>
      </Modal>
      <div style={divTestCloseButtonStyles}>
        <CloseButton
          styles={{
            position: 'left',
            size: 'large'
          }}
          data={[setShowModal]}
        />
      </div>
    </div>
  )
}

export default App
```

## Modal

the modal accepts

- title
- styles as object

  - colorPrimary: `color`
  - colorSecondary: `color`
  - colorComplementary: `color`
  - bgColorPrimary: `color`
  - bgColorSecondary: `color`
  - bgColorComplementary: `color`
  - maxWidth: `number` (the modal will convert this number to string `px` at the end)
  - maxHeight: `number` (the modal will convert this number to string `px` at the end)
  - size: (`'small', 'medium', 'large', 'largest'`)
  - fontSize: (`'small', 'medium', 'large', 'largest'`)

```javascript
const StyleDefaultState = {
  colorPrimary: '#ffc200',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#00437d',
  bgColorComplementary: '#00437d',
  maxWidth: 70,
  maxHeight: 50,
  fontSize: '',
  size: ''
}
```

- data

  - boolean
  - callback (`set boolean to false and close modal`)

- children as content

## Close Button

the button accepts

- styles as object

  - colorPrimary: `color`
  - colorSecondary: `color`
  - colorComplementary: `color`
  - bgColorPrimary: `color`
  - bgColorSecondary: `color`
  - bgColorComplementary: `color`
  - size: (`'small', 'medium', 'large', 'largest'`)
  - position: (`'right', 'left', 'right-out-top', 'right-out-bottom', 'left-out-top', 'left-out-bottom'`)

```javascript
const StyleDefaultState = {
  colorPrimary: '#ffc200',
  colorSecondary: '#ffc200',
  colorComplementary: '#ffc200',
  bgColorPrimary: '#00437d',
  bgColorSecondary: '#0002',
  bgColorComplementary: '#00437d',
  position: '',
  size: ''
}
```

- data

  - callback (`set boolean to false and close something`)

- children as content
