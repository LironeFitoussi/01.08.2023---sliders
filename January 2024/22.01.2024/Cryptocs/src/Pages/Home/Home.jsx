import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className={styles.container}>
            <h1 className={styles.mainHeader}>Cryptov</h1>
            <h3>LANDING PAGE</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu varius imperdiet. Suspendisse ultricies mi diam, vitae molestie ipsum maximus vestibulum.</p>
            <button className={styles.mainButton}>
                <Link to="/auth" ><p style={{ color: 'black' }}>Register NOW!</p></Link>
            </button>
            <img src='images/bitcoin.png' alt="" />
            <div>
                <p><a href="">FACEBOOK</a></p>
                <p><a href="">LINKEDIN</a></p>
                <p><a href="">INSTAGRAM</a></p>
            </div>
        </section>
    )
}