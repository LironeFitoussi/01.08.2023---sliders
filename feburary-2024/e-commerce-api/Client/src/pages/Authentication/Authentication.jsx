import { useState } from "react";
import SignIn from "../../components/Authentication/signin/signin";
import SignUp from "../../components/Authentication/signup/signup";
import styles from "./Authentication.module.css";

function Authentication() {
  const [isRegistered, setIsRegistered] = useState(true);


  const toggleType = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className={styles.authDiv}>
      <>
        {isRegistered ? (
          <SignIn />
        ) : (
          <SignUp />
        )}
        <br />
        <h3>
          {isRegistered ? "Still don't have an account?" : "Already a Member?"}
          <span onClick={toggleType}>
            {isRegistered ? "Sign Up" : "Log In"}
          </span>{" "}
        </h3>
      </>
    </div>
  );
}

export default Authentication;
