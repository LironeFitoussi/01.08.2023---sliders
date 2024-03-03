import styles from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar () {
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
        <div className={styles.center}><h1 className={styles.logo}>ZARA</h1></div>
        <div className={styles.right}>
          <div className={styles.menuItem}>
            REGISTER
          </div>
          <div className={styles.menuItem}>
            SIGN IN
          </div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon/>
            </Badge> 
          </div>
        </div>
      </div>
      
    </div>  
  )
}

