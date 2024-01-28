import React, { createContext, useState} from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider ({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const darkModeColors = {
        backgroundColor: '#000',
        color: '#fff'
    }

    const lightModeColors = {
        backgroundColor: '#fff',
        color: '#000'
    }

    const [selectedTheme, setSelectedTheme] = useState(lightModeColors);

    const toggleTheme = () => {
        if (!isDarkMode) {
            setSelectedTheme(darkModeColors)
        } else {
            setSelectedTheme(lightModeColors)
        }
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, isDarkMode, selectedTheme}}>
            {children}
        </ThemeContext.Provider> 
    );
}