import styles from "./AddToCartBtn.module.css";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { UserContext } from "../../context/User";
import { useContext } from "react";

export default function AddToCartBtn({ productId }) {
  const { userToken } = useContext(UserContext);
  //   const obj = useParams();
  //   console.log(obj);
  const handleAddToCart = () => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/v1/cart/${productId}/addToCart`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <button onClick={handleAddToCart}>Add to Cart ((Cart icon))</button>;
}
