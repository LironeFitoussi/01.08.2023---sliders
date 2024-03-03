import styles from "./signup.module.css";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/User";
import { apiUrl } from "../../../config/apiConfig";

const SignUp = () => {
  const { fetchUser, setUserToken } = useContext(UserContext);

  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}api/v1/users/signup`, signupForm);
      localStorage.setItem("userToken", res.data.token);
      await setUserToken(localStorage.getItem("userToken"));
      fetchUser();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className={styles.inputField}>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className={styles.inputField}>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className={styles.inputField}>
          <label>Birthday</label>
          <input type="date" name="birthday" onChange={handleChange} />
        </div>
        <div className={styles.inputField}>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className={styles.inputField}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="passwordConfirm"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
