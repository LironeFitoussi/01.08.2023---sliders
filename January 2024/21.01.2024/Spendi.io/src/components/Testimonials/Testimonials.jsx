import styles from './Testimonials.module.css'

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.userCard}>
                <h3>Alona</h3>
                <img className={styles.profilePic} src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="profile pic" />
                <p className={styles.testim}> web page editors now use Lorem Ipsum as their default model text, and a searc</p>
            </div>
            <div className={styles.userCard}>
                <h3>Eden</h3>
                <img className={styles.profilePic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCt0vSgeIE5IOZ6xV5qD4tDH4Wn3BrsO-3vFExuxd-UtTwyqaJ_pzCAwpTvmp4d5GLjA&usqp=CAU" alt="profile pic" />
                <p className={styles.testim}>a more-or-less normal distribution of letters, as opposed to using 'Content here, content h</p>
            </div>
            <div className={styles.userCard}>
                <h3>Kobi</h3>
                <img className={styles.profilePic} src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg" alt="profile pic" />
                <p className={styles.testim}>m Ipsum is simply dummy text of the printing and tynter took a galley of type and scrambled it to make a type spec</p>
            </div>
        </section>
    )
}