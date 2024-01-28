import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ThemeProvider from './context/Theme';

function App() {

  return (
   <ThemeProvider>
    <BrowserRouter>
      <Navbar userData={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/favorites/:id" element={<SingleCurrency />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
