import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
export default function Home() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        // Use a timeout to add the 'visible' class after a delay
        const timeoutId = setTimeout(() => {
          setVisible(true);
        }, 200); // Adjust the delay according to your preference
    
        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
      }, []);
      
    return (
        <>
            <section className={styles.container}>

                <div className={styles.mainHeader}>
                    <h1>Cryptoc</h1>
                    <h3>LANDING PAGE</h3>
                    <p>Maecenas id sapien quis nunc interdum suscipit. Etiam et risus lacus. Vivamus vestibulum pellentesque tortor at sodales. Sed sit amet ex ac ex sagittis rhoncus. Nulla commodo risus a diam tempus, a vestibulum leo pulvinar. Nam id mauris porta, fermentum magna id, tristique dui. Ut sed fringilla urna. Vestibulum hendrerit leo et tortor hendrerit maximus.</p>
                </div>
                <button className={styles.mainButton}>
                    <Link to="/auth" ><p>Register NOW!</p></Link>
                </button>
                <img className={`${styles.bitcoinImg} ${visible ? styles.visible : ''}`} src='images/planet.png' alt="" />
                <div className={styles.socialContainer}>
                    <p><a className={styles.socialLink} href="">FACEBOOK</a></p>
                    <p><a className={styles.socialLink} href="">LINKEDIN</a></p>
                    <p><a className={styles.socialLink} href="">INSTAGRAM</a></p>
                </div>


            </section>
        </>

    )
}