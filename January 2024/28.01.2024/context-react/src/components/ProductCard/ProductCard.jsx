import { useContext } from "react"
import { ThemeContext } from "../../context/Theme";

export default function ProductCard () {
    const { toggleTheme } = useContext(ThemeContext);
    
    return (
        <div>
            <h2>ProductCard</h2>
            <button onClick={toggleTheme}> Toggle from 2nd Generation</button>
        </div>
    )
}