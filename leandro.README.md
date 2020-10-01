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

  const imageClick = (user: string): void => {
    history.push(`/${user}`)
  }

  return <CardLeandro handleClick={imageClick} avatars={[{...}]}>...</CardLeandro>
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
