import styles from './SingInComp.module.css'
export default function SignInComp () {
    return (
        <form className={styles.signInComp} >
            <h1>Sign In to your Account</h1>
            <label htmlFor="email">Your E-mail:</label>
            <input type="email" name='email'/>
            <label htmlFor="password">You Password:</label>
            <input type="password" />

            <button>Log In</button>
        </form>
    )
}