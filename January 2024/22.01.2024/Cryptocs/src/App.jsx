import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { app } from './Config/firebase';

import Home from './Pages/Home/Home.jsx';
import All from './Pages/All/All.jsx';
import Favorites from './Pages/Favorites/Favorites.jsx';
import Auth from './Pages/Auth/Auth.jsx'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />
        
        <Route
          path="/all"
          element={<All />}
        />
        <Route
          path='favorites'
          element={<Favorites />}
        />
        <Route 
          path="/auth" 
          element={<Auth />} 
        />
      </Routes>
    </BrowserRouter>
  )
}


