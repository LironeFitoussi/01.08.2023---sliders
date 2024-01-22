import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <nav style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
        <ul className={styles.navbar} >
          <li>
            <Link to="/"><b>CRYPTOC</b></Link>
          </li>
          <li>
            <Link to="/all">All</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <ul className={styles.navbar}>
            <li>
                <Link to="/auth">Auth</Link>
            </li>
        </ul>
      </nav>
    )
}