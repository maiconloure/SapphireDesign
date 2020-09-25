# Christopher Components Lib

i have create 2 components, one close button and one modal to be use in my applications

## Modal

the modal accepts

- title
- styles as object

  - colorPrimary
  - colorSecondary
  - colorComplementary
  - bgColorPrimary
  - bgColorSecondary
  - bgColorComplementary
  - maxWidth
  - maxHeight
  - size as string (`'small', 'medium', 'large', 'largest'`)
  - fontSize as string (`'small', 'medium', 'large', 'largest'`)

- data

  - boolean
  - callback (`set boolean to false and close modal`)

- children as content

## Close Button

the button accepts

- styles as object

  - colorPrimary
  - colorSecondary
  - colorComplementary
  - bgColorPrimary
  - bgColorSecondary
  - bgColorComplementary
  - size as string (`'small', 'medium', 'large', 'largest'`)
  - position as string (`'right', 'left', 'right-out-top', 'right-out-bottom', 'left-out-top', 'left-out-bottom'`)

- data

  - callback (`set boolean to false and close something`)

- children as content
