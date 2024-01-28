import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeProvider from './context/Theme';

import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CreateResume from './Pages/CreateResume/CreateResume';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={< Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateResume />} />
          {/* <Route path="/all" element={<All />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          {/* <Route path="/favorites/:id" element={<SingleCurrency />} /> */}
          {/* 25.01.2024/Cryptocs/src/Components/Footer<Route path="/auth" element={<Auth />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
