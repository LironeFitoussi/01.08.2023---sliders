import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/User";
import SignOut from "../signout/signout";

export default function Navbar() {
  const { userToken, user } = useContext(UserContext);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}api/v1/cart/${user._id}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios
        .request(config)
        .then((response) => {
          setCart(response.data.data.userCart[0].products.length);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error.message);
    }
  }, [user]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.input} />
            <SearchIcon style={{ color: "grey", fontSize: "16px" }} />
          </div>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo}>
            <Link to="/">Home</Link>
          </h1>
        </div>
        <div className={styles.right}>
          {user === undefined || user === null ? ( // Check if user is authenticated
            <div className={styles.menuItem}>
              <Link to="/authentication" className={styles.link}>
                SIGN IN
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.menuItem}>
                <Link to="/products" className={styles.link}>
                  Browse Store
                </Link>
              </div>
              {user.role === "admin" && ( // Check if user is admin
                <div className={styles.menuItem}>
                  <Link to="/admin" className={styles.link}>
                    Admin
                  </Link>
                </div>
              )}
              {user.role !== "admin" && ( // Display Cart only if user is not admin
                <>
                  <div className={styles.menuItem}>
                    <Link to="/user-orders" className={styles.link}>
                      User Orders
                    </Link>
                  </div>
                  <div className={styles.menuItem}>
                    <Badge badgeContent={cart} color="primary">
                      <Link to={`/cart/${user._id}`} className={styles.link}>
                        <ShoppingCartIcon />
                      </Link>
                    </Badge>
                  </div>
                </>
              )}

              <SignOut />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
