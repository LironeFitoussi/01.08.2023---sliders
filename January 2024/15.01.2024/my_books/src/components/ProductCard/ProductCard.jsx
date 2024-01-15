import styles from './ProductCard.module.css'

export default function ProductCard (props) {
    return (
        <div className={styles.productCard}>
            <h5>{props.title}</h5>
            <img className={styles.productImg} src={props.imgSrc} alt={props.title + " img"} />
            <p><b>Price:</b> {props.price}$ </p>
        </div>
    )
};