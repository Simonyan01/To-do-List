import { useForm } from "react-hook-form"
import styles from "@styles/add-todo.module.scss"

export const AddTodo = ({ onAdd }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleSave = (data) => {
    onAdd(data)
    reset()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(handleSave)}>
        {errors.text && <p className={styles.error}>{errors.text.message}</p>}
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
        <div className={styles.formContainer}>
          <input
            type="text"
            placeholder="Enter a new task"
            className={`col-span-5 mb-4 ${styles.basicInput}`}
            {...register("text", {
              required: "Task name is required",
              validate: value =>
                !!value.trim() || "Task name can't be empty"
            })}
          />
          <button className={styles.button}>
            Save
          </button>
          <textarea
            placeholder="Enter a description"
            className={`col-span-6 ${styles.basicInput}`}
            {...register("description", {
              required: "Description is required",
              validate: (value) =>
                !!value.trim() || "Description can't be empty"
            })}
          />
        </div>
      </form>
    </div>
  )
}
