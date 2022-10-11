import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Sections from './components/Sections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    <Sections></Sections>
    </>
  )
}

export default App
