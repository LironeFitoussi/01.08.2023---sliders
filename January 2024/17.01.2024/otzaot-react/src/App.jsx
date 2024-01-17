import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import Spends from "./pages/Spends.jsx/Spends.jsx";
import Home from './pages/Home/Home.jsx';
import Auth from './pages/Auth/Auth.jsx';

function App() {
  return (
  <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> //todo Add Home Page
        <Route path="/spends" element={<Spends />}/>
        <Route path="/sign-up" element={<Auth />}/>
      </Routes>
    </BrowserRouter>
  </>
    
  )
}

export default App
