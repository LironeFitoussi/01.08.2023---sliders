import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { app, db, auth } from './config/firebase';

// Pages Import
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Auth from './pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/transactions" element={<Transactions app={app} db={db} />} />,
        <Route path="/auth" element={<Auth auth={auth} db={db} />} />
      </Routes>
    </BrowserRouter>
  )
}
