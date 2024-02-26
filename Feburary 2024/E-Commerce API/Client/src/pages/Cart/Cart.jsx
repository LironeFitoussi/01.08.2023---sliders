import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/User";
import styles from "./Cart.module.css";

export default function Cart() {
  const [userCart, setUserCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "credit_card",
    transactionId: "1234567890",
    amount: 0,
    currency: "NIS",
  });
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
        console.log(response.data.data.userCart[0].products);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchCart(); // Fetch cart data when the component mounts
  }, [id, userToken]);

  useEffect(() => {
    // Calculate total price when userCart changes
    const totalPrice = userCart.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    setCartTotalPrice(totalPrice);
  }, [userCart]);

  const removeFromCart = (productId) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/v1/cart/${productId}/removeFromCart`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUserCart(userCart.filter((product) => product._id !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckout = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handlePayment = () => {
    axios
      .post(`http://localhost:3000/api/v1/cart/${id}/pay`, paymentData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setShowDialog(false);
        return response;
      })
      .then((response) => {
        // After payment, you may want to update the cart or perform any necessary action
      })
      .catch((error) => {
        console.log(error);
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
          <p>Total Price: ${cartTotalPrice.toFixed(2)}</p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </main>

      {showDialog && (
        <div className={styles["dialog-container"]}>
          <div className={styles.dialog}>
            <h2>Payment Form</h2>
            <form>
              <label>
                Payment Method: <input type="text" value="credit_card" />
              </label>
              <br />
              <label>
                Transaction ID:{" "}
                <input type="text" value="1234567890" readOnly />
              </label>
              <br />
              <label>
                Amount:{" "}
                <input type="text" value={cartTotalPrice.toFixed(2)} readOnly />
              </label>
              <br />
              <label>
                Currency: <input type="text" value="NIS" readOnly />
              </label>
              <br />
              <button onClick={handlePayment}>Submit Payment</button>
            </form>
            <button onClick={handleCloseDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
