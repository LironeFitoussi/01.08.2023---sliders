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
          {/* <img src="/images/Logo.png" alt="" style={{ width: '1.5rem' }} /> */}
          <Link to="/" className={styles.logo}>
            <b >Resumix<span>Pro</span></b>
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
        <li className={styles.li}>
          <Link to="/create">
            Create Resume
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/">
            Your Creations
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/">
            Apply Jobs
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
        {currentUser ?
          <p className={styles.wbMsg} >Welcome Back <b>{currentUser.userName}</b> <span onClick={handleLogout}><img className={styles.logoutIcon} src="https://static-00.iconduck.com/assets.00/logout-icon-2048x2046-yqonjwjv.png" alt="" /></span></p>
          :
          <div className={styles.navbar}>
            <li className={styles.li}>
              <Link to="/login">
                Sign in
              </Link>
            </li>
            <li className={styles.registerBtn}>
              <Link to="/register">
                Start Free
              </Link>
            </li>
          </div>

        }

      </ul>
    </nav>
  );
}
