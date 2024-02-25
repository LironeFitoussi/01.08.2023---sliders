import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import AddToCart from "../addToCart/AddToCart";
const ProductCard = ({ productData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${productData._id}`);
  };

  return (
    <div className={styles.productCard}>
      <h2>{productData.name}</h2>
      <img
        src={productData.image}
        alt={productData.name}
        onClick={handleClick}
      />
      <p>{productData.description}</p>
      <p>Price: {productData.price} NIS</p>
      <AddToCart productId={productData._id} />
    </div>
  );
};

export default ProductCard;
