import styles from "@styles/to-do-list.module.scss"
import { ToDoContext } from "@context/context"
import { ToDoItem } from "./todo-item"
import { useContext } from "react"

export const List = () => {
  const { filteredTodos, onDelete, onToggleComplete, onAddSubTask } = useContext(ToDoContext)

  return (
    <section className={styles.listContainer}>
      {
        filteredTodos?.length === 0 ? (
          <span className={styles.unavailable}>No tasks available</span>
        ) : (
          filteredTodos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onAddSubTask={onAddSubTask}
              onToggleComplete={onToggleComplete}
            />
          ))
        )
      }
    </section>
  )
}
