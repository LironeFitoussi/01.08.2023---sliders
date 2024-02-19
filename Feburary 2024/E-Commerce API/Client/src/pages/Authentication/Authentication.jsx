import React, { useState, useContext } from "react";
import SignIn from "../../components/Authentication/signin/signin";
import SignUp from "../../components/Authentication/signup/signup";
import { UserContext } from "../../context/User";
import styles from "./Authentication.module.css";

function Authentication() {
  const { user, setUser } = useContext(UserContext);
  const [isRegistered, setIsRegistered] = useState(true);

  const submitSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        newUser
      );
      setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleType = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className={styles.authDiv}>
      <>
        {isRegistered ? (
          <SignIn />
        ) : (
          <SignUp inputInfo={inputInfo} submitSignUp={submitSignUp} />
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
