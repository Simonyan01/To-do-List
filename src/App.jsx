import { ToDoList } from "@components/todo-list"
import styles from "./App.module.scss"

export default function App() {
  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <ToDoList />
      </div>
    </section>
  )
}
