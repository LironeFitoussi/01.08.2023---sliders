import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

export default function Login({ auth }) {
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
            <h1 className={styles.mainHeader} >LOGIN</h1>
            <form
                className={styles.loginForm}
                onSubmit={handleSubmit}
            >
                <input
                    className={styles.input}
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder='Email'
                    onChange={handleChange}
                />

                <input required type="password" name="password"
                    placeholder='Password'
                    value={formData.password}
                    className={styles.input}
                    onChange={handleChange}
                />
                <div>
                    <input type="checkbox" name='rememberMe' />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>

                <button className={styles.submitBtn} type="submit">Log In</button>
            </form>
        </div>
    )
}