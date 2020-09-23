import React from 'react'

import { Button } from 'capstone'
import 'capstone/dist/index.css'

const handleClick = () => console.log('click');


const App = () => {
  return <Button onClick={handleClick}>Ola</Button>
}

export default App
