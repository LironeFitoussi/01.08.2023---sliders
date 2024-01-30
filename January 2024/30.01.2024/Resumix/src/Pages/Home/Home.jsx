import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Home({ user }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <section className={styles.container}>
                <div className={styles.mainHeader}>
                    <h1>Free resume builder for modern job seeker</h1>
                    <p>By employing the best practices and innovative tech, ResumixPro boosts yoyr chances of landing a better job - completly for free.</p>
                </div>
                <img className={styles.mainImg} src='/images/Asset1.png' alt="" />
            </section>
        </>

    )
}