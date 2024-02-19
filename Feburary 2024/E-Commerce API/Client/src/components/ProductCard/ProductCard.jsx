import styles from './ProductCard.module.css';

const ProductCard = ({ productData }) => {
    return (
        <div className={styles.productCard}>
            <h2>{productData.name}</h2>
            <img src={productData.image} alt={productData.name} />
            <p>{productData.description}</p>
            <p>Price: {productData.price} NIS</p>
        </div>
    );
};

export default ProductCard;
