import { useContext } from "react";
import styles from "./signout.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";

const SignOut =  () => {
  const navigate = useNavigate();
  const { setUser, setUserToken } = useContext(UserContext);

  const handleSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
    await setUserToken(null)
    setUser(undefined)
    fetchUser();
    navigate("/");
  };

  return (
    <button className={styles["signout-button"]} onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
