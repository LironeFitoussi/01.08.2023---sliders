import styles from './BookCard.module.css'

export default function BookCard (props) {
    return (
        <div className={styles.bookCard}>
            <div>
                <h2>{props.title}</h2>
                <p><b>Description: </b>{props.description}</p>
            </div>
            <img className={styles.bookImg} src={props.cover_link} alt={`${props.title}book-cover`} />
        </div>
    )
};
