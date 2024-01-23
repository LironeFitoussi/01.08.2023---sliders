import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbar}>
        <li>
          <Link to="/" className={styles.logo}>
            <b>CRYPTOC</b>
          </Link>
        </li>
        <li>
          <Link to="/all" className={styles.navLink}>
            All
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={styles.navLink}>
            Favorites
          </Link>
        </li>
      </ul>
      <ul className={styles.navbar}>
        <li>
          <Link to="/auth" className={styles.authLink}>
            Auth
          </Link>
        </li>
      </ul>
    </nav>
  );
}
