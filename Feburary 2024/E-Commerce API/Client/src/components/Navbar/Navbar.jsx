import styles from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import SignOut from "../signout/signout";


export default function Navbar () {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.input} />
            <SearchIcon style={{ color: 'grey', fontSize: '16px' }}/>
          </div>
        </div>
        <div className={styles.center}><h1 className={styles.logo}><Link to="/">Home</Link></h1></div>
        <div className={styles.right}>

        {user === undefined || user === null ? ( // Check if user is authenticated
              <div className={styles.menuItem}>
                  <Link to="/authentication" className={styles.link}>SIGN IN</Link>
              </div>
          ) : (
              <>
                  
                  {user.role !== "admin" && ( // Display Cart only if user is not admin
                      <div className={styles.menuItem}>
                          <Link to={`/cart/${user._id}`} className={styles.link}>Cart</Link>
                      </div>
                  )}
                  {user.role === "admin" && ( // Check if user is admin
                      <div className={styles.menuItem}>
                          <Link to="/admin" className={styles.link}>Admin</Link>
                      </div>
                  )}
                  <div className={styles.menuItem}>
                      <Link to="/user-orders" className={styles.link}>User Orders</Link>
                  </div>
              </>
          )}

          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon/>
            </Badge> 
          </div>
          <SignOut />
        </div>
      </div>
      
    </div>  
  )
}

