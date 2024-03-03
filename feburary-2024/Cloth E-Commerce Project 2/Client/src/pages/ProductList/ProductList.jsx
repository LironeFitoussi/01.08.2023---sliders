import styles from "./ProductList.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
export default function ProductList() {
  return (
    <div className={styles.container}>
      <Announcement />
      <Navbar />
      <h1 className={styles.title}>Dresses</h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}>Filter Products:</span>
          <select className={styles.select} name="" id="">
            <option className={styles.option} value="" disabled selected>
              Color
            </option>
            <option className={styles.option} value="White">
              White
            </option>
            <option className={styles.option} value="Black">
              Black
            </option>
            <option className={styles.option} value="Red">
              Red
            </option>
            <option className={styles.option} value="Blue">
              Blue
            </option>
            <option className={styles.option} value="Yellow">
              Yellow
            </option>
            <option className={styles.option} value="Green">
              Green
            </option>
          </select>
          <select className={styles.select} name="" id="">
            <option className={styles.option} value="" disabled selected>
              Size
            </option>
            <option className={styles.option} value="XS">
              XS
            </option>
            <option className={styles.option} value="S">
              S
            </option>
            <option className={styles.option} value="M">
              M
            </option>
            <option className={styles.option} value="L">
              L
            </option>
            <option className={styles.option} value="XL">
              XL
            </option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}>Sort Products:</span>
          <select className={styles.select} name="" id="">
            <option className={styles.option} value="Newest" selected>
              Newest
            </option>
            <option className={styles.option} value="PriceAsc">
              Price (asc)
            </option>
            <option className={styles.option} value="PriceDesc">
              Price (desc)
            </option>
          </select>
        </div>
        {/* <div className={styles.filter}>filter</div> */}
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
