import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages Import
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Auth from './pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/transactions" element={<Transactions />} />,
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}
