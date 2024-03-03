import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/User";
import styles from "./Cart.module.css";
import { apiUrl } from "../../config/apiConfig";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const { userToken, user } = useContext(UserContext);
  const { id } = useParams();

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${apiUrlL}api/v1/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserCart(response.data.data.userCart[0].products);
      setCartTotalPrice(response.data.data.userCart[0].totalAmount);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [id, userToken]);

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`${apiUrl}api/v1/cart/${productId}/removeFromCart`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      await fetchCart(); // Refetch cart after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handlePaymentWithStripe = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/v1/cart/checkout-session/${user.cart}`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        window.open(response.data.data.session.url, "_blank");
        console.log(response.data.data.session);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <main className={styles.userCart}>
        {userCart.map(({ product, quantity }) => (
          <div key={product._id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            {product.priceDiscount > 0 && (
              <p>Price Discount: ${product.priceDiscount}</p>
            )}
            <p>Quantity: {quantity}</p>
            <p>Total: ${quantity * product.price}</p>
            <button onClick={() => removeFromCart(product._id)}>
              remove from cart
            </button>
          </div>
        ))}

        <div>
          <p>Total Price: {cartTotalPrice}</p>
          <button
            onClick={handlePaymentWithStripe}
            disabled={paymentProcessing}
          >
            {paymentProcessing ? "Processing..." : "Checkout with Stripe"}
          </button>
        </div>
      </main>
    </div>
  );
}
