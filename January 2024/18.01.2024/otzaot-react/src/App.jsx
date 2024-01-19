import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Spends from "./pages/Spends.jsx/Spends.jsx";
import Home from './pages/Home/Home.jsx';
import Auth from './pages/Auth/Auth.jsx';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/spends">Spends</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spends" element={<Spends />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
