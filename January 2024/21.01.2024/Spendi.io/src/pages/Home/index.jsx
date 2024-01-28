import styles from './Home.module.css'
import Testimonials from "../../components/Testimonials/Testimonials"
import About from "../../components/About/About"

export default function Home() {
    return (
        <section style={{ position: 'relative' }}>
            <div className={styles.mainContainer}>
                <h1 className={styles.headerText} >Welcom To Spendi!</h1>
                <Testimonials />
                <About />
            </div>
        </section>

    )
}