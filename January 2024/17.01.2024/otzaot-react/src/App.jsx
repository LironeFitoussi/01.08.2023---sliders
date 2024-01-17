import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Spends from "./pages/Spends.jsx/Spends.jsx";
import Home from './pages/Home/Home.jsx';
import Auth from './pages/Auth/Auth.jsx';
import { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [user, setUser] = useState({mail: null, name: null});

  // useEffect(() => {
  //   fetch('http://localhost:3000/user')
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setUser(data)
  //   })
  // }, [])

  useEffect(() => {
    console.log(user);
  }, [user])
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
          <Route path="/spends" element={<Spends user={user}/>} />
          <Route path="/auth" element={<Auth user={user} setUser={setUser}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
