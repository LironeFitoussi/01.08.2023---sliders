import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styles from './Product.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddToCart from '../addToCart/AddToCart';
export default function Product({item}) {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        navigate(`/products/${item._id}`);
      };

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`${styles.circle} ${isHovered ? styles.circleHovered : ''}`}></div>
            <img className={styles.image} src={item.image} alt="" />
            <div className={`${styles.info} ${isHovered ? styles.infoHovered : ''}`}>
                <div className={styles.icon}>
                    <AddToCart productId={item._id} />
                </div>
                <div className={styles.icon} onClick={handleClick}>
                    <SearchIcon />
                </div>
                <div className={styles.icon}>
                    <FavoriteBorderIcon />
                </div>
            </div>
        </div>
    );
}
