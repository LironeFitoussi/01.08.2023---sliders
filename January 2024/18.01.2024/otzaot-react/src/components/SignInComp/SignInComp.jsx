import { useState } from 'react';
import styles from './SingInComp.module.css';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function SignInComp({user, setUser}) {
  // const [loginUser, setLoginUser] = useState({...formData});
  const Button = styled.button`
    background-color: #efefef;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: green;
      color: #fff;
    }
  `;

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   loginUser(formData)
  // }, [formData])
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setUser(
  //     {...formData}
  //   )
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   try {
  //     const response = await fetch('http://localhost:3000/user', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Form data successfully submitted!');
  //     } else {
  //       console.error('Failed to submit form data.');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form data:', error);
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <section>
      <h1 style={{ textAlign: 'center' }}></h1>
      <form className={styles.signInComp}
      //  onSubmit={handleSubmit}
       >
        <h1>Sign In to your Account</h1>
        <label htmlFor="email">Your E-mail:</label>
        <input required type="email" name="email" 
        // value={formData.email} 
        // onChange={handleChange} 
        />
        <label htmlFor="password">Your Password:</label>
        <input required type="password" name="password" 
        // value={formData.password} 
        // onChange={handleChange} 
        />
        <Button type="submit">Log In</Button>
      </form>
    </section>
  );
}
