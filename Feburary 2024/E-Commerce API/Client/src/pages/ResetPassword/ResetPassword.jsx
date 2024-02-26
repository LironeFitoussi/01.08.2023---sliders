import styles from './ResetPassword.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function ResetPassword () {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resetBtn, setResetBtn] = useState('Reset Password');
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();  
      setResetBtn(
        <img src='./Rolling-2.1s-204px.gif'/>
      )
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/users/forgotPassword',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {"email": email}
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data));
        setMessage(`An email has been sent with instructions to reset your password.`);
        setEmail('');
        setResetBtn('Reset Password')
      })
      .catch((error) => {
        console.log(error);
      });
      
    };
    return (
        <div className={styles.resetPassword}>
            <h1>Reset Password</h1>
            <div>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">{resetBtn}</button>
            </form>
            </div>
        </div>
    )
}