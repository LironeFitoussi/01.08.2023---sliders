import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState();

  const fetchProducts = async (page, limit) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/products?page=${page}&limit=${limit}`
      );
      setPagination(response.data.pagination);
      setProducts(response.data.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(1, 5); // Fetch initial page with default values
  }, []);

  const handlePageChange = (page) => {
    fetchProducts(page, pagination.limit);
  };

  return (
    <>
      <div className={styles.container}>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </div>
      <div className={styles.pagination}>
        {pagination && (
          <div>
            <button
              disabled={!pagination.hasPrevPage}
              onClick={() => handlePageChange(pagination.prevPage)}
            >
              Previous
            </button>
            <span>
              {pagination.page} of {pagination.totalPages}
            </span>
            <button
              disabled={!pagination.hasNextPage}
              onClick={() => handlePageChange(pagination.nextPage)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
