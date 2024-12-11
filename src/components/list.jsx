import styles from "@styles/to-do-list.module.scss"
import { ToDoItem } from "./todo-item";

export const List = ({ items, onDelete, onToggleComplete }) => {
  return (
    <div className={styles.listContainer}>
      {
        items?.length === 0 ? (
          <span className={styles.unavailable}>No tasks available</span>
        ) : (
          items.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))
        )
      }
    </div>
  )
}
