import { useState, useContext} from "react";
import styles from "./signin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/User";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { fetchUser, setUserToken } = useContext(UserContext);

  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        loginForm
      );
      localStorage.setItem("userToken", res.data.token);
      await setUserToken(localStorage.getItem("userToken"));
      fetchUser();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.inputField}>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className={styles.inputField}>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <span>Forgot Password? reset <Link to='/forgot-password'>here</Link></span>
    </div>
  );
};

export default SignIn;
