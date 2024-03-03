import styles from './CategoryItem.module.css';

export default function CategoryItem ({ item }) {
    console.log(item);
    return (
        <div className={styles.container}>
            <img className={styles.image} src={item.img} alt="" />
            <div className={styles.info}>
                <h1 className={styles.title}>{item.title}</h1>
                <button className={styles.button}>SHOP NOW!</button>
            </div>

        </div>
    )
}