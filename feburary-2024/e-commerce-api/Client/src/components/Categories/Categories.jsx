import styles from './Categories.module.css';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';

export default function Categories() {
    return (
        <div className={styles.container}>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </div>
    );
}
