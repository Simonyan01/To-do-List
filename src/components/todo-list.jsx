import styles from "@styles/to-do-list.module.scss"
import { ToastContainer } from "react-toastify"
import { ToDoFilter } from "./filter-todo"
import { AddTodo } from "./add-todo"
import { List } from "./list"

export const ToDoList = () => {
  return (
    <section className={styles.container}>
      <p className={styles.title}>To-do List</p>
      <AddTodo />
      <ToDoFilter />
      <List />
      <ToastContainer />
    </section>
  )
}
