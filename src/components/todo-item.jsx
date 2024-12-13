import styles from "@styles/to-do-item.module.scss"
// import { useForm } from "react-hook-form";

export const ToDoItem = ({ todo, onDelete, onToggleComplete, /* onAddSubTask */ }) => {
  // const { register, reset, handleSubmit } = useForm()

  // const handleAddSubTask = (data) => {
  //   const subTaskText = data.text
  //   onAddSubTask(todo.id, subTaskText)
  //   reset()
  // }

  return (
    <section className={`${styles.container} ${todo.completed ? styles.globalInitial : styles.globalActive} `}>
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
      {/* <form onSubmit={handleSubmit(handleAddSubTask)}>
        <div>
          {todo.subTasks?.map((subTask) => (
            <div key={subTask.id}>
              {subTask.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          {...register("sub-task")}
          placeholder="Add a sub-task"
        />
        <button>Add</button>
      </form> */}
    </section>
  )
}
