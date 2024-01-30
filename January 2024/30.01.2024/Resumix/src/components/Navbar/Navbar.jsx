import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import styles from './Navbar.module.css';
import userDataProvider from '../../context/UserData';

export default function Navbar() {
  const { currentUser } = useContext(userDataProvider);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User successfully signed out.");
        // Redirect or do any other necessary actions after logout
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error occurred during sign-out:", error.message);
      });
  }

  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li className={styles.li}>
          <Link to="/" className={styles.logo}>
            <b>Resumix<span>Pro</span></b>
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
        <li className={styles.li}>
          <Link to="/create">Create Resume</Link>
        </li>
        <li className={styles.li}>
          <Link to="/your-creations">Your Creations</Link>
        </li>
        <li className={styles.li}>
          <Link to="/apply-jobs">Apply Jobs</Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
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
          <div className={styles.navbar}>
            <li className={styles.li}>
              <Link to="/login">Sign in</Link>
            </li>
            <li className={styles.registerBtn}>
              <Link to="/register">Start Free</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
