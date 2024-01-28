import { useState } from 'react'
import Test from './components/Example1/Test'
import './App.css'
import ThemeProvider from './context/Theme'

function App() {
  return (
    <ThemeProvider>
      <Test />
    </ThemeProvider>
  )
}

export default App
