import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function Login({ auth, setLogType }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(`${user} Succefully Signed in`);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
            });
    }


    return (
        <div className={styles.loginContainer}>
            <h1 style={{ textAlign: 'center' }}>Sign In to your Account</h1>
            <form
                className={styles.loginForm}
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="email">Your E-mail:</label>
                    <input required type="email" name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Your Password:</label>
                    <input required type="password" name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className={styles.submitBtn} type="submit">Log In</button>
            </form>
        </div>
    )
}