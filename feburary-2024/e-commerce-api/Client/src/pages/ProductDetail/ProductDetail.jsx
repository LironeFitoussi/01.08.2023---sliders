import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ProductDetail.module.css";
import { apiUrl } from "../../config/apiConfig";

export default function ProductDetail() {
  const [productData, setProductData] = useState(null);
  let { id } = useParams();

  const fetchProductData = async () => {
    try {
      const res = await axios.get(`${apiUrl}api/v1/products/${id}`);
      setProductData(res.data.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return (
    <main>
      {productData ? (
        <div className={styles.productDetail}>
          <h1>{productData.name}</h1>
          <div className={styles.imageContainer}>
            <img src={productData.image} alt={productData.name} />
          </div>
          <div className={styles.details}>
            <p>
              <strong>Category:</strong> {productData.category}
            </p>
            <p>
              <strong>Description:</strong> {productData.description}
            </p>
            <p>
              <strong>Price:</strong> ${productData.price}
            </p>
            <p>
              <strong>Stock:</strong> {productData.stock}
            </p>
            {/* Add more details as needed */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
