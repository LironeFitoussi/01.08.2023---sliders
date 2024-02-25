import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/User";
import styles from "./Cart.module.css";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const { userToken, user } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/cart/${id}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        setUserCart(response.data.data.userCart[0].products);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchCart();
  }, [id, userToken]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = userCart.map(async (product) => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/v1/products/${product._id}`
          );
          return { ...response.data.data.product, quantity: product.quantity };
        } catch (error) {
          console.log(error);
          return null;
        }
      });

      Promise.all(productPromises)
        .then((products) => {
          setCartProducts(products.filter((product) => product !== null));
        })
        .catch((error) => {
          console.log("Error fetching products:", error);
        });
    };

    if (userCart.length > 0) {
      fetchProducts();
    }
  }, [userCart]);

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <main className={styles.userCart}>
        {cartProducts.map((product) => (
          <div key={product._id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {product.priceDiscount > 0 && (
              <p>Price Discount: ${product.priceDiscount}</p>
            )}
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
