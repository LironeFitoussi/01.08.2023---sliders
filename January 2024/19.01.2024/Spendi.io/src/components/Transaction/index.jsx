import styles from './Transaction.module.css'

export default function Transaction({ title, category, amount, date }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{amount}{" $"}</p>
            <p>{date}</p>
        </div>
    )
}