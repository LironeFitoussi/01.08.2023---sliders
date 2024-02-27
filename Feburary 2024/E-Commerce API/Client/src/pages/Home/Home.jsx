import styles from "./Home.module.css";

// import components

import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}
