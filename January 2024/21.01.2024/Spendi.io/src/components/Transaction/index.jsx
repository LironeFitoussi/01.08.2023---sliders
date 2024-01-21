import styles from './Transaction.module.css'

export default function Transaction({ title, category, amount, date, id, removeTransaction }) {
    return (
        <div className={styles.transactionElement}>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{date}</p>
            <p>{amount}{" $"}</p>
            <button onClick={() => removeTransaction(id)}>Delete</button>
        </div>
    )
}