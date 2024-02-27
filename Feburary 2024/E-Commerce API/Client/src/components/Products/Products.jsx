import styles from './Products.module.css';
import { popularProducts } from '../../data';
import Product from '../Product/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Products() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/products");
            setProducts(response.data.data["products"]);    
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    console.log(products);
    
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        products && (<div className={styles.container}>
            {products.map((item, index) => (
                <Product key={index} item={item} />
            ))}
        </div>)
    );
}
