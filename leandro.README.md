## CardLeandro

Description: It's a translucent "background blurred" container with customizable background color, font color, font size and et cetera, as detailed bellow. It may hold a title, avatar images, and all sorts of content as children; and nothing as well (everything is optional).

it accepts:

- children: string or objects type 'React.ReactNode'.
- title: string that holds the title, customized as bellow.
  - titleSize: string like css 'font-size'.
  - titleUnderline: string like css 'border-bottom'.
  - titleUnderlineOffset: string setting title's 'padding-bottom'.
  - titleMarginBottom: string like css setting title whole container 'margin-bottom' if necessary.
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
  - boxPadding: string setting the card 'width' just like in css.
  - backgroundColor: string setting the card 'background' just like in css.
  - topSpacing: string setting the card 'margin-top' just like in css.
  - leftSpacing: string setting the card 'margin-left' just like in css.
  - closeable: boolean setting if the card may have a button that closes is it's content.
  - closeDataPass: array holding a boolean and a callback function ('React.Dispatch<React.SetStateAction<boolean>>' or '((props: boolean) => void)'), relative to it's closeable functionality.
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
  - titleUnderlineOffset = '4px',
  - titleMarginBottom = '0',
  - boxWidth = 'fit-content',
  - boxPadding = '1vh 2vw 1vh 2vw',
  - topSpacing = '0',
  - leftSpacing = '0',
  - fontColor = '#0089ff',
  - closeDataPass = [true, () => {}],
  - closeable = false,
  - backgroundColor = 'rgba(30, 30, 30, 0.7)',
  - borderDetails = '2px solid #111'

## ModalLeandro

Description: This modal is made with a centralized CardLeandro, therefore it accepts most of it's original properties to modulate it's self. It must be controlled by state and, unlike CardLeandro, it does require a property.

- Required prop:

```javascript
interface Props {
  closeDataPass: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void)
  ];
}
```

- Other properties (as seen above at CardLeandro doc, all optional):

  - children: string or React.ReactNode
  - title: string
  - titleSize: string
  - titleUnderline: string
  - titleUnderlineOffset: string
  - titleMarginBottom: string
  - boxWidth: string
  - boxPadding: string
  - topSpacing: string
  - leftSpacing: string
  - fontColor: string
  - backgroundColor: string
  - borderDetails: string

- Default values:

  - titleSize = '1.8rem',
  - titleUnderline = 'none',
  - titleUnderlineOffset = '4px',
  - titleMarginBottom = '0',
  - boxWidth = 'fit-content',
  - boxPadding = '1vh 2vw 1vh 2vw',
  - topSpacing = '0',
  - leftSpacing = '0',
  - fontColor = '#869198',
