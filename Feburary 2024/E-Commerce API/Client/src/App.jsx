import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/User.jsx";

import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";

import Header from "./components/Header/Header.jsx";

function App() {
  const { userToken } = useContext(UserContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {!userToken && <Route path="/authentication" element={<Authentication />} />}
      </Routes>
    </Router>
  );
}

export default App;
