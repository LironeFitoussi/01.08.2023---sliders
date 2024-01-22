import styles from './Home.module.css'
import { Link } from 'react-router-dom'
export default function Home () {
    return (
        <section className={styles.container}>
            <h1 className={styles.mainHeader}>Welcome to CRYPTOC, your next Crypto Manager.</h1>
            <button className={styles.mainButton}>
                <Link to="/auth" ><p style={{color: 'black'}}>Register NOW!</p></Link>
            </button>
            <img src="" alt="" />
            <div>
                <p><a href="">FACEBOOK</a></p>
                <p><a href="">LINKEDIN</a></p>
                <p><a href="">INSTAGRAM</a></p>
            </div>
        </section>
    )
}