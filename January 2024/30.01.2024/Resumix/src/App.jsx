import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeProvider from './context/Theme';

import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import CreateResume from './Pages/CreateResume/CreateResume';
import TemplateChoose from './Pages/TemplateChoose/TemplateChoose';
import UserCreations from './Pages/UserCreations/Usercreations';
import ApplyJobs from './Pages/ApplyJobs/ApplyJobs';
import EditDocument from './Pages/EditDocument/EditDocument';
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
          <Route path='/your-creations' element={<UserCreations />} />
          <Route path='/your-creations/edit/:id' element={<EditDocument />} />
          <Route path='/your-creations/view/:id' element={<TemplateChoose />} />
          <Route path='/apply-jobs' element={<ApplyJobs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
