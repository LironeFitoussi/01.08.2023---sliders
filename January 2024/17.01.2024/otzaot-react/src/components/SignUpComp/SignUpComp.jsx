import { useEffect } from 'react';
import styles from './SignUpComp.module.css'
import styled from 'styled-components'
export default function  SignUpComp () {
    const Button = styled.button`
    background-color: #efefef;
        transition: background-color .2s, color .2s;

        &:hover {
        background-color: green;
        color: #fff;
        }
    `;
 return (
    <section className={styles.container}>
        <h1 style={{textAlign: 'center'}}> Sign up to our wonderful site</h1>
        <form className={styles.signUpForm}>
            <label htmlFor="lName">First Name :</label>
            <input type="text" name="lName" />
            <label htmlFor="fName">Last Name:</label>
            <input type="text" name="fName" />
            <hr />
            <label htmlFor="email">Your E-mail:</label>
            <input type="email" name='email'/>
            <label htmlFor="password">Your Password:</label>
            <input type="password" />
            <label htmlFor="passwordValidation">Validate Your Password:</label>
            <input type="passwordValidation" />
            <Button type='submit'>Register</Button>
        </form>
    </section>
    
 )
}