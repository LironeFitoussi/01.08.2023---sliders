import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/User";
import SignOut from "../signout/signout";
import styles from "./Header.module.css";

export default function Header() {
  const { userToken, user, fetchUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      await fetchUser();
      setIsLoading(false);
    };

    getUserData();
  }, [fetchUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/products" className={styles.link}>
              Browse Store
            </Link>
          </li>
          {!user ? ( // Check if user is not defined
            <li className={styles.li}>
              <Link to="/authentication" className={styles.link}>
                Authentication
              </Link>
            </li>
          ) : (
            <>
              <SignOut />
              {user.role !== "admin" && ( // Display Cart only if user is not admin
                <li className={styles.li}>
                  <Link to={`/cart/${user._id}`} className={styles.link}>
                    Cart
                  </Link>
                </li>
              )}
              {user.role === "admin" && ( // Check if user is admin
                <li className={styles.li}>
                  <Link to="/admin" className={styles.link}>
                    Admin
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
