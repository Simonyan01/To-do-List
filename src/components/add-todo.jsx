import styles from "@styles/add-todo.module.scss"
import { ToDoContext } from "@context/context";
import { useForm } from "react-hook-form"
import { useContext } from "react";

export const AddTodo = () => {
  const { onAdd } = useContext(ToDoContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const handleSave = (data) => {
    onAdd(data)
    reset()
  }

  return (
    <section className={styles.container}>
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
          <select
            className={`col-span-2 ${styles.basicInput}`}
            {...register("category")}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="low-priority">Low Priority</option>
          </select>
        </div>
      </form>
    </section>
  )
}
