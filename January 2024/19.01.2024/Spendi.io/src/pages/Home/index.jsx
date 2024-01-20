import styles from './Home.module.css'
import Testimonials from "../../components/Testimonials/Testimonials"
import About from "../../components/About/About"

export default function Home() {
    return (
        <div>
            <h1>this is the Home Page</h1>
            <Testimonials />
            <About />
        </div>
    )
}