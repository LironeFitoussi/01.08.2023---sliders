import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/User.jsx";
import './App.css'

import Home from "./pages/Home/Home.jsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Admin from "./pages/Admin/Admin.jsx";
// import Header from "./components/Header/Header.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx"; // Import the CreateProduct component
import Cart from "./pages/Cart/Cart.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import OrderValidation from "./pages/Orders/OrderValidation.jsx";
import AdminStats from "./pages/Admin/AdminStats.jsx";


// Page components:
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Announcement/Announcement";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const { userToken, user } = useContext(UserContext);

  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {user && userToken && (
          <>
            {user.role === "admin" && (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/create-product" element={<CreateProduct />} />
                <Route path="/admin/admin-stats" element={<AdminStats />} />

              </>
            )}
            {user.role !== "admin" && (
              <>
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/user-orders" element={<Orders />} />
                <Route path="/success" element={<OrderValidation />} />
              </>
            )}
          </>
        )}

        {!user && (
          <>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:tokenId" element={<ResetPassword />} />
            <Route path="/authentication" element={<Authentication />} />
          </>
        )}
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
