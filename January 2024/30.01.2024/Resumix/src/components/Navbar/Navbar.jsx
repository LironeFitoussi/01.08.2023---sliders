import { useState, useContext } from "react"; // Add useContext import
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FaBars } from "react-icons/fa"; // Import hamburger icon
import styles from "./Navbar.module.css";
import userDataProvider from "../../context/UserData";

export default function Navbar() {
  const { currentUser } = useContext(userDataProvider);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User successfully signed out.");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error occurred during sign-out:", error.message);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          <b>
            Resumix<span>Pro</span>
          </b>
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <li className={styles.li}>
          <Link to="/create">Create Resume</Link>
        </li>
        <li className={styles.li}>
          <Link to="/your-creations">Your Creations</Link>
        </li>
        <li className={styles.li}>
          <Link to="/apply-jobs">Apply Jobs</Link>
        </li>
        {currentUser ? (
          <li className={styles.li}>
            <p className={styles.wbMsg}>
              Welcome Back <b>{currentUser.userName}</b>
              <span onClick={handleLogout}>
                <img
                  className={styles.logoutIcon}
                  src="./images/right-from-bracket-solid.svg"
                  alt="Logout"
                />
              </span>
            </p>
          </li>
        ) : (
          <li className={styles.li}>
            <Link to="/login">Sign in</Link>
          </li>
        )}
      </ul>
      {currentUser ? null : (
        <Link className={styles.registerBtn} to="/register">
          Start Free
        </Link>
      )}
    </nav>
  );
}
