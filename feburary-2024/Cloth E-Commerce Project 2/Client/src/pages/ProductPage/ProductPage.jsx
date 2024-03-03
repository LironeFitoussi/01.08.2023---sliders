import styles from "./ProductPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ProductPage() {
  return (
    <div className={styles.container}>
      <Announcement />
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt=""
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Elegant Jeans</h1>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <span className={styles.price}>$ 20</span>

          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select className={styles.filterSize} name="" id="">
                <option className={styles.filterSizeOption}>XS</option>
                <option className={styles.filterSizeOption}>S</option>
                <option className={styles.filterSizeOption}>M</option>
                <option className={styles.filterSizeOption}>L</option>
                <option className={styles.filterSizeOption}>XL</option>
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <AddIcon />
              <span className={styles.amount}>1</span>
              <RemoveIcon />
            </div>
            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
