import React, { createContext, useState} from "react";
export const ThemeContext = createContext({});

export default function ThemeProvider ({children}) {
    return (
        <ThemeContext value={{}}>
            {children}
        </ThemeContext>
    )
}