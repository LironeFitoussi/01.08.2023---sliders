import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./OrderValidation.module.css";

export default function OrderValidation() {
  const { userToken, user } = useContext(UserContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cart = searchParams.get("cart");
  const [responseStatus, setResponseStatus] = useState(null);

  useEffect(() => {
    if (user && userToken) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}api/v1/orders/order-validation`,
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        params: {
          cart: cart,
        },
      };

      axios
        .request(config)
        .then((response) => {
          setResponseStatus(response.status);
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            setResponseStatus(error.response.status);
          }
        });
    }
  }, [user, userToken, cart]);

  let content;
  switch (responseStatus) {
    case 200:
      content = (
        <div className={styles.success}>
          <h1>Success!</h1>
          <p>Your order has been successfully validated.</p>
        </div>
      );
      break;
    case 400:
      content = (
        <div className={styles.error}>
          <h1>Bad Request</h1>
          <p>There was a problem with your request. Please try again later.</p>
        </div>
      );
      break;
    case 500:
      content = (
        <div className={styles.error}>
          <h1>Server Error</h1>
          <p>There was an issue on our server. Please try again later.</p>
        </div>
      );
      break;
    default:
      content = (
        <div className={styles.pending}>
          <h1>Pending...</h1>
          <p>Your order validation is in progress. Please wait.</p>
        </div>
      );
      break;
  }

  return <div>{content}</div>;
}
