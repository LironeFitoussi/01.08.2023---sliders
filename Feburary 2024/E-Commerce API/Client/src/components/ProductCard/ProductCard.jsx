import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ productData }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${productData._id}`);
    }

    return (
        <div className={styles.productCard} onClick={handleClick}>
            <h2>{productData.name}</h2>
            <img src={productData.image} alt={productData.name} />
            <p>{productData.description}</p>
            <p>Price: {productData.price} NIS</p>
        </div>
    );
};

export default ProductCard;
