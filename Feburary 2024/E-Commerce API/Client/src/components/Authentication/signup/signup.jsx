import styles from "./signup.module.css";

const SignUp = ({ inputInfo, submitSignUp }) => {
  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={submitSignUp}>
        <div className={styles.inputField}>
          <label>Name:</label>
          <input type="text" name="name" onChange={inputInfo} />
        </div>
        <div className={styles.inputField}>
          <label>Email:</label>
          <input type="email" name="email" onChange={inputInfo} />
        </div>
        <div className={styles.inputField}>
          <label>Password:</label>
          <input type="password" name="password" onChange={inputInfo} />
        </div>
        <div className={styles.inputField}>
          <label>Confirm Password:</label>
          <input type="password" name="passwordConfirm" onChange={inputInfo} />
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
