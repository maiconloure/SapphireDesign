# Sapphire Design

## Library components for Timeless project, in Typescript

Application for time management and work organization adjusted and customized to the target user.

- An application that is easy to learn and use
- A simple and intuitive framework
- Dynamic and intelligent system

##### Note: Application under development, soon to launch MVP

---

## **Maicon Lourenço** /// Components

## Logo

```
import { Logo } from 'capstone-project';

  <Logo image={YouImageHere} />
```

---

## Button

Example with default values;

```
import { Button } from 'capstone-project';

  <Button
    color="#014D82"
    fontSize='1.4rem'
    width="170px"
    height='55px
    weight={700}
    onClick={() => {}}>

    YouTextHere

    </Button>

```

---

## Input and PasswordInput

Input is the most basic form of input with some click, shadow and color effects.
PasswordInput also has several effects, and has an eye icon, which can be switched. \
Open eye, type = text \
Closed eye, type = password

```
import { Input, PasswordInput } from 'capstone-project';

  <Input
    type='text'
    placeholder='Username'
    font = 'Inter'
    fontSize = '1rem'
    weight = 500
    color = '#014D82'
    width = '220px'
    height = '30px'
    onTextChange={() => {}}
  />

  <PasswordInput
    placeholder='Password'
    font = 'Inter'
    fontSize = '1rem'
    weight = 500
    color = '#014D82'
    width = '220px'
    height = '30px'
    onTextChange={() => {}}
  />

```

---

## Action Button

(WORK IN PROGRESS)

```
import { ActionButton } from 'capstone-project';

  <ActionButton label='Add Component' />

```
