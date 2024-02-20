import styles from "./ProductsContainer.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

export default function ProductsContainer() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/products");
            setProducts(response.data.data["products"]);    
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <main  className={styles.productsContainer}>
                {products.map((product, index) => (
                    <ProductCard key={`prod_${index}`} productData={product} />
                ))}
            </main>
        </div>
    );
}
