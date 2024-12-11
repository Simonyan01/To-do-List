import styles from "@styles/filter-todo.module.scss"

export const ToDoFilter = ({ filter, onFilterChange }) => {
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
      </div>
    </section>
  )
}

