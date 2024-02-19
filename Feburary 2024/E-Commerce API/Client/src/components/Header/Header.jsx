import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import SignOut from "../signout/signout";
import styles from "./Header.module.css";

export default function Header() {
    const { user, userToken } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.link}>Home</Link>
                    </li>
                    {!userToken ? (
                        <li className={styles.li}>
                            <Link to="/authentication" className={styles.link}>Authentication</Link>
                        </li>
                    ) : (
                        <li className={styles.li}>
                            <SignOut />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
