import styles from './Testimonials.module.css'

export default function Testimonials () {
    return (
        <section className={styles.testimonials}>
            <div>
                <h1>Alon</h1>
                <img src="./Example.image " alt="profile pic" />
                <p> web page editors now use Lorem Ipsum as their default model text, and a searc</p>
            </div>
            <div>
                <h1>Eden</h1>
                <img src="./Example.image " alt="profile pic" />
                <p>a more-or-less normal distribution of letters, as opposed to using 'Content here, content h</p>
            </div><div>
                <h1>Korin </h1>
                <img src="./Example.image " alt="profile pic" />
                <p>m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spec</p>
            </div>
        </section>
    )
}