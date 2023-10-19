import { useState } from 'react'
import Navbar from './components/Navbar'
import { Text } from '@chakra-ui/react'
import QuoteApp from './components/Drag'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <QuoteApp/>
    </>
  )
}

export default App
