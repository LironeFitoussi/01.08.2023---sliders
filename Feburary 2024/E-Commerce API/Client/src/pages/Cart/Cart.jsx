import styles from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/User";
import axios from "axios";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const { userToken, user } = useContext(UserContext);
  const { id } = useParams();

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`, // Assuming your token is in the format "Bearer <token>"
          },
        }
      );
      setUserCart(response.data.data.userCart[0].products);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    console.log(userCart);
  }, [userCart]);

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <main className={styles.userCart}>
        {userCart.map((product) => (
          <div key={product.id} className={styles.card}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {/* Add other product details as needed */}
          </div>
        ))}
      </main>
    </div>
  );
}
