import React, { useState, useContext } from "react";
import axios from "axios";
import SignIn from "../../components/Authentication/signin/signin";
import SignUp from "../../components/Authentication/signup/signup";
import SignOut from "../../components/Authentication/signout/signout";
import { UserContext } from "../../context/User";
import styles from "./Authentication.module.css";

function Authentication() {
  const { user, setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState({});
  const [isRegistered, setIsRegistered] = useState(true);

  const inputInfo = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    console.log(newUser);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        newUser
      );
      console.log(res.data);
      setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  const submitSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", newUser);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleType = () => {
    setIsRegistered(!isRegistered);
  };

  // console.log(user.data);
  return (
    <div className={styles.authDiv}>
      {user ? (
        <div>
          Hello {user.name}
          <SignOut />
        </div>
      ) : (
        <>
          {isRegistered ? (
            <SignIn inputInfo={inputInfo} submitLogin={submitLogin} />
          ) : (
            <SignUp inputInfo={inputInfo} submitSignUp={submitSignUp} />
          )}
          <br />
          <h3>
            {isRegistered
              ? "Still don't have an account?"
              : "Already a Member?"}
            <span onClick={toggleType}>
              {isRegistered ? "Sign Up" : "Log In"}
            </span>{" "}
          </h3>
        </>
      )}
    </div>
  );
}

export default Authentication;
