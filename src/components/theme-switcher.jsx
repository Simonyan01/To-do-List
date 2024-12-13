import { useTheme } from "@hooks/use-theme";
import styles from "@styles/theme.module.scss"

export const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={styles.theme}
        >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    )
}
