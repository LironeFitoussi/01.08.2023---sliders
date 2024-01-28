import { useContext } from "react"
import { ThemeContext } from "../../context/Theme";

import ProductCard from '../ProductCard/ProductCard.jsx'

export default function Test () {
    const {isDarkMode, toggleTheme, selectedTheme } = useContext(ThemeContext);
    console.log(isDarkMode);
    return (
      <div style={{...selectedTheme}}>
        Test
        <ProductCard />
      </div>
    )
}