import styles from './Products.module.css';
import { popularProducts } from '../../data';
import Product from '../Product/Product';

export default function Products() {
    return (
        <div className={styles.container}>
            {popularProducts.map((item, index) => (
                <Product key={item.id} item={item} />
            ))}
        </div>
    );
}
