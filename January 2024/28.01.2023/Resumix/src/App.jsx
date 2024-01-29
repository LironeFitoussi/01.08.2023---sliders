import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeProvider from './context/Theme';

import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CreateResume from './Pages/CreateResume/CreateResume';
import TemplateChoose from './Pages/TemplateChoose/TemplateChoose';

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
          <Route path='/create/template' element={<TemplateChoose />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
