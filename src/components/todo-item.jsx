import styles from "@styles/to-do-item.module.scss"

export const ToDoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <section className={`${styles.container} ${todo.completed ? styles.globalInitial : styles.globalActive}`}>
      <p className={`${styles.text} ${todo.completed ? "line-through" : styles.initial}`}>
        {todo.text}
      </p>
      <p className={styles.description}>{todo.description}</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`${styles.basicButton} ${todo.completed ? styles.initial : styles.active}`}
        >
          {todo.completed ? "Cancel" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className={`${styles.basicButton} ${styles.initial}`}
        >
          Delete
        </button>
      </div>
    </section>
  )
}
