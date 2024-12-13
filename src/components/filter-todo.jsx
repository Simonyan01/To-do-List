import styles from "@styles/filter-todo.module.scss"
import { ToDoContext } from "@context/context"
import { useContext } from "react"

export const ToDoFilter = () => {
  const { filter, onFilterChange, filterCategory } = useContext(ToDoContext)

  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <button
          onClick={() => onFilterChange("all")}
          className={`${styles.filterButton} ${filter === "all" ? styles.initial : styles.active}`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`${styles.filterButton} ${filter === "active" ? styles.initial : styles.active}`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={`${styles.filterButton} ${filter === "completed" ? styles.initial : styles.active}`}
        >
          Completed
        </button>
        <button
          onClick={() => onFilterChange("category", "urgent")}
          className={`${styles.filterButton} ${filter === "category" && filterCategory === "urgent"
            ? styles.urgent
            : styles.active
            }`}
        >
          Urgent
        </button>
        <button
          onClick={() => onFilterChange("category", "low-priority")}
          className={`${styles.filterButton} ${filter === "category" && filterCategory === "low-priority"
            ? styles.lowPriority
            : styles.active
            }`}
        >
          Low priority
        </button>
      </div>
    </section>
  )
}

