import styles from "./Footer.module.css";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MapIcon from "@mui/icons-material/Map";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

//TODO: Continue from here:
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>ZARA</h1>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className={styles.socialContainer}>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#3b5999" }}
          >
            <FacebookIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e4405f" }}
          >
            <InstagramIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#55acee" }}
          >
            <XIcon />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e60023" }}
          >
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Userfull Links</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Cart</li>
          <li className={styles.listItem}>Man Fashion</li>
          <li className={styles.listItem}>Woman Fashion</li>
          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>My Account</li>
          <li className={styles.listItem}>Order Tracking</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Wishlist</li>
          <li className={styles.listItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles.contactItem}>
          <MapIcon /> 770 Eastern Parkway, Brooklyn, NYC
        </div>
        <div className={styles.contactItem}>
          <PhoneEnabledIcon />
          +55 234 23423 34
        </div>
        <div className={styles.contactItem}>
          <AlternateEmailIcon /> contact@zara.dev
        </div>
        <img
          className={styles.payment}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        ></img>
      </div>
    </div>
  );
}
