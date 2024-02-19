import styles from "./signin.module.css";

const SignIn = ({ inputInfo, submitLogin }) => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={submitLogin}>
        <div className={styles.inputField}>
          <label>Email:</label>
          <input type="email" name="email" onChange={inputInfo} />
        </div>
        <div className={styles.inputField}>
          <label>Password:</label>
          <input type="password" name="password" onChange={inputInfo} />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
