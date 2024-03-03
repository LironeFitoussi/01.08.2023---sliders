import styles from "./AddToCart.module.css";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { apiUrl } from "../../config/apiConfig";
// import { useParams } from "react-router-dom";
import { UserContext } from "../../context/User";
import { useContext } from "react";

export default function AddToCart({ productId }) {
  const { userToken } = useContext(UserContext);
  //   const obj = useParams();
  //   console.log(obj);
  const handleAddToCart = () => {
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${apiUrl}api/v1/cart/${productId}/addToCart`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <AddShoppingCartIcon onClick={handleAddToCart} />;
}
