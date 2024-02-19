import React, { createContext, useState, useContext, useEffect } from "react";
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

  console.log(user + " is registered");
  const inputInfo = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", newUser);
      setUser(res.data);
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

  // TODO: Implement Sign Out functionality
  // const signOutHandler = async () => {
  //   // Implement sign out functionality
  // };

  const toggleType = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
      {user ? (
        <div>
          Hello user
          <button onClick={signOutHandler}>Sign out</button>
        </div>
      ) : (
        <div className={styles.authDiv}>
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
        </div>
      )}
    </>
  );
}

export default Authentication;
