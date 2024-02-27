import { useState } from 'react';
import styles from './Product.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Product({item}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`${styles.circle} ${isHovered ? styles.circleHovered : ''}`}></div>
            <img className={styles.image} src={item.img} alt="" />
            <div className={`${styles.info} ${isHovered ? styles.infoHovered : ''}`}>
                <div className={styles.icon}>
                    <AddShoppingCartIcon />
                </div>
                <div className={styles.icon}>
                    <SearchIcon />
                </div>
                <div className={styles.icon}>
                    <FavoriteBorderIcon />
                </div>
            </div>
        </div>
    );
}
