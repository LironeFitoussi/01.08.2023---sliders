import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/User.jsx";

import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Header from "./components/Header/Header.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx"; // Import the CreateProduct component
import Cart from "./pages/Cart/Cart.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";

function App() {
  const { userToken, user } = useContext(UserContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {user && userToken && (
          <>
            {user.role === "admin" && (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/create-product" element={<CreateProduct />} />
              </>
            )}
            {user.role !== "admin" && (
              <>
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/user-orders" element={<Orders />} />
              </>
            )}
          </>
        )}

        {!user && (
          <>
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/authentication" element={<Authentication />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
