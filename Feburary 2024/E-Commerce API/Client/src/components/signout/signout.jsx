import { useContext } from "react";
import styles from "./signout.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";

const SignOut =  () => {
  const navigate = useNavigate();
  const { fetchUser} = useContext(UserContext);

  const handleSignOut =  (e) => {
    e.preventDefault();
    localStorage.removeItem("userToken");
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
