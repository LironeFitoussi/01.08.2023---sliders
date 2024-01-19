import { useState, useEffect } from 'react'; //uesState for React for formData changing
import styles from './SignUpComp.module.css' // CSS module Styling
import styled from 'styled-components' // Styled Components
import { createUserWithEmailAndPassword } from 'firebase/auth'; //Firebase import to handle "createUserWithEmailAndPassword" user creation + loggin user
import { auth } from '../../config/firebase'; // importing auth from out config file with all the data of our firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../config/firebase";

export default function  SignUpComp () {
    const [currentUserId, setCurrentUserId] = useState(null);
    const [newUserAdded, setNewUserAdded] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUserId(user.reloadUserInfo.localId);
        });
        return () => unsubscribe();
      }, []);

    useEffect(() => {
        if (newUserAdded === true && currentUserId !== null){
            console.log('test')
            createUser(formData, currentUserId)
        }
    }, [newUserAdded, currentUserId])

    // User State Data
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        passwordValidation: ''
    });

    // Styled Button using "Styled-Components"
    const Button = styled.button`
    background-color: #efefef;
        transition: background-color .2s, color .2s;

        &:hover {
        background-color: green;
        color: #fff;
        }
    `;

    // Handeling Every Input change on the form and filling the "fromData" obejct on state
    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handeling Submit by preventing default and activation of register function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await register();
        setNewUserAdded(true)
    };    

    // Register function that connetcts to firebase auth
    // Asynchronus Function beacause of Ser ver comunication
    const register = async () => {
        // First try on fetch 
        try {
          const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password); // 3 params needed - auth (db data to connect with), mail and password
          console.log(user);
        }
        // Handeling Error 
        catch (error) {
          console.error(error.message);
        }
    };
    const usersCollectionRef = collection(db, 'users');

    const createUser = async ({ fName, lName, email }, currentUserId) => {
        try {
            await addDoc(usersCollectionRef, { id: currentUserId, fName: fName, lName: lName, email: email, spendsData: []});
        } catch (error) {
            console.error("Error creating user in database:", error.message);
        }
    };
    

 return (
    <section className={styles.container}>
        <h1 style={{textAlign: 'center'}}> Sign up to our wonderful site</h1>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <label htmlFor="fName">Your First Name:</label>
            <input type="text" name='fName' onChange={handleChange}/>
            
            <label htmlFor="lName">Your Last Name:</label>
            <input type="text" name='lName' onChange={handleChange}/>
            
            <label htmlFor="email">Your E-mail:</label>
            <input type="email" name='email' onChange={handleChange}/>
            
            <label htmlFor="password">Your Password:</label>
            <input type="password" name='password' onChange={handleChange} />
            
            <label htmlFor="passwordValidation">Validate Your Password:</label>
            <input type="password" name='passwordValidation' onChange={handleChange}/>
            
            <Button type='submit'>Register</Button>
        </form>
    </section>
 )
}