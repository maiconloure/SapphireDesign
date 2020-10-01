## CardLeandro

Description: It's a translucent "background blurred" container with customizable background color, font color, font size and et cetera, as detailed bellow. It may hold a title, avatar images, and all sorts of content as children; and nothing as well (everything is optional).

it accepts:

- children: string or objects type 'React.ReactNode'.
- title: string that holds the title, customized as bellow.
  - titleSize: string like css 'font-size'.
  - titleUnderline: string like css 'border-bottom'.
  - fontColor: string like css 'color'.
- avatars: array of objects that must contain:

  - image: string or string variable that holds a png image import.
  - user: string holding the username of the avatar.
    example:

  ```javascript
  ;[{ image: profilePicture, user: 'Napoleon Dynamite' }]
  ```

- Other properties:

  - boxWidth: string setting the card 'width' just like in css.
  - backgroundColor: string setting the card 'background' just like in css.
  - topSpacing: string setting the card 'margin-top' just like in css.
  - leftSpacing: string setting the card 'margin-left' just like in css.
  - closeable: boolean setting if the card may have a button that closes is it's content.
  - data: array holding a boolean and a 'React.Dispatch<React.SetStateAction<boolean>>' or '((props: boolean) => void)', relative to it's closeable functionality.
  - borderDetails: string setting the card 'border' just like in css.
  - handleClick: function applied to images 'onCLick' property, passed by prop that expects a string argument like the following example:

  ```javascript
  import { CardLeandro } from 'capstone'

  const Component = () => {
    const imageClick = (user: string): void => {
      console.log(user)
    }

    return <CardLeandro handleClick={imageClick} avatars={[{...}]}>...</CardLeandro>
  }

  ```

- Default values:

  - titleSize = '1.8rem',
  - titleUnderline = '2px solid #014D82',
  - boxWidth = 'fit-content',
  - topSpacing = '0',
  - leftSpacing = '0',
  - fontColor = '#0089ff',
  - data = [true, () => {}],
  - closeable = false,
  - backgroundColor = 'rgba(30, 30, 30, 0.7)',
  - borderDetails = '2px solid #111'

## ModalLeandro

Description: This modal is made with a centralized CardLeandro, therefore it accepts most of it's original properties to modulate it's self. It must be controlled by state and, unlike CardLeandro, it does require a property.

- Required prop:

```javascript
interface Props {
  data: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ];
}
```

It must be handled like this inside it's parent component:

```javascript
import React, { useState } from 'react'
import { CardLeandro } from 'capstone'

const Component = () => {
  const [showLeandroModal, setShowLeandroModal] = useState(false)

  return (
    <>
      // actuation example:
      <button onClick={setShowLeandroModal(true)}>Open LeandroModal</button>
      {showLeandroModal && (
        <ModalLeandro
          data={[showLeandroModal, () => setShowLeandroModal(false)]}
        >
          <Box contentEditable='true'>Digite algo para começar ;)</Box>
        </ModalLeandro>
      )}
    </>
  )
}
```

- Other properties (as seen above at CardLeandro doc, all optional):

  - children: string or React.ReactNode
  - title: string
  - titleSize: string
  - titleUnderline: string
  - boxWidth: string
  - topSpacing: string
  - leftSpacing: string
  - fontColor: string
  - backgroundColor: string
  - borderDetails: string

- Default values:

  - titleSize = '1.8rem',
  - titleUnderline = 'none',
  - boxWidth = 'fit-content',
  - topSpacing = '0',
  - leftSpacing = '0',
  - fontColor = '#869198',
