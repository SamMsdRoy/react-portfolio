import { useState } from 'react'
import './App.css'
import {Navigationbar} from "./Components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigationbar/>
    </>
  )
}

export default App
