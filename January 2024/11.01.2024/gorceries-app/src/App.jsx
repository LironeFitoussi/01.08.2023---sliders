import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Groceries from './Pages/Groceries'
import Products from './Pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Groceries />
      < Products />
    </>
  )
}

export default App
