import { ThemeSwitcher } from "@components/theme-switcher";
import { ToDoProvider } from "@context/ToDoListContext";
import { ThemeProvider } from "@context/ThemeContext";
import { ToDoList } from "@components/todo-list";
import styles from "./App.module.scss";

export default function App() {
  return (
    <ThemeProvider>
      <ToDoProvider>
        <section className={styles.app}>
          <div className={styles.container}>
            <ToDoList />
          </div>
          <ThemeSwitcher />
        </section>
      </ToDoProvider>
    </ThemeProvider>
  );
}
