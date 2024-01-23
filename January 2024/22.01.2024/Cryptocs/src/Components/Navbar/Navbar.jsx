import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { getAuth, signOut } from "firebase/auth";

export default function Navbar({ userData }) {

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User successfully signed out.");
        location.href = "/";
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
            <b>CRYPTOC</b>
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/all" className={styles.navLink}>
            All
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/favorites" className={styles.navLink}>
            Favorites
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
        {userData ?
          <p>Welcome back, <b>{userData.userName}</b>, <span onClick={handleLogout}>Logout?</span></p>
          :
          <li className={styles.li}>
            <Link to="/auth" className={styles.authLink}>
              Auth
            </Link>
          </li>
        }

      </ul>
    </nav>
  );
}
