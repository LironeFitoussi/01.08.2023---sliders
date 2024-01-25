import styles from './Register.module.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default function Register({ auth, db }) {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        passwordValidation: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            // console.log(user.uid);

            try {
                const docRef = await addDoc(collection(db, 'users'), { userId: user.uid, fName: formData.fName, lName: formData.lName });
                window.location.href = '/all';
            } catch (e) {
                console.error('Error adding document:', e);
            }

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section className={styles.registerContainer}>
            <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <label htmlFor="fName">Your First Name:</label>
                <input className={styles.input} type="text" name="fName" value={formData.fName} onChange={handleChange} />

                <label htmlFor="lName">Your Last Name:</label>
                <input className={styles.input} type="text" name="lName" value={formData.lName} onChange={handleChange} />

                <label htmlFor="email">Your E-mail:</label>
                <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="password">Your Password:</label>
                <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />

                <label htmlFor="passwordValidation">Validate Your Password:</label>
                <input
                    className={styles.input}
                    type="password"
                    name="passwordValidation"
                    value={formData.passwordValidation}
                    onChange={handleChange}
                />
                <button type="submit" className={styles.submitBtn}>Register</button>
            </form>
        </section>
    );
}
