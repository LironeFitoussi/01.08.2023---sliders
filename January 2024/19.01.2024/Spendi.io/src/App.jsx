import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { app, db, auth } from './config/firebase';

// Pages Import
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Auth from './pages/Auth';


export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const authStateChanged = (user) => {
      setUser(user.uid);
    };
    const authStateChangeUnsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => authStateChangeUnsubscribe();
  }, []);

  useEffect(() => console.log(user), [user])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/transactions" element={<Transactions app={app} db={db} userId={user} />} />,
        <Route path="/auth" element={<Auth auth={auth} db={db} />} />
      </Routes>
    </BrowserRouter>
  )
}
