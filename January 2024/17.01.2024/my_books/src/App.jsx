import './App.css'
import Books from './pages/Books/Books.jsx';
import Products from './pages/Products/Products.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 

function App() {
  return (
      <BrowserRouter>
      <NavBar />
        < Routes >
          <Route path='/products' element={<Products/>} />
          <Route path='/books' element={<Books/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
