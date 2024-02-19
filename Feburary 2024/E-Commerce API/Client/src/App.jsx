import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/User.jsx";

import Authentication from "./pages/Authentication/Authentication.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        {/* Define more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
