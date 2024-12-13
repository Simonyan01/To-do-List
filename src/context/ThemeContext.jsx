import { useState, useEffect } from "react"
import { ThemeContext } from "./context"

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        savedTheme && setIsDarkMode(savedTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? "dark" : "light"
        setIsDarkMode(!isDarkMode)

        localStorage.setItem("theme", newTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <div className={isDarkMode ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
