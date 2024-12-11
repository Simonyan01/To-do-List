import { filterState, handleAdd, handleDelete, handleToggleComplete } from "@utils/utils"
import styles from "@styles/to-do-list.module.scss"
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from "react"
import { ToDoFilter } from "./filter-todo"
import { AddTodo } from "./add-todo"
import { API } from "@api/axios"
import { List } from "./list"

export const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")

  const filteredTodos = todos.filter(filterState[filter])

  useEffect(() => {
    API
      .get("/todos")
      .then(res => setTodos(res.data))
  }, [])


  return (
    <section className={styles.container}>
      <p className={styles.title}>To-do List</p>
      <AddTodo onAdd={(todo) => handleAdd(todo, setTodos)} />
      <ToDoFilter
        filter={filter}
        onFilterChange={(newFilteredItem) => setFilter(newFilteredItem)}
      />
      <List
        items={filteredTodos}
        onDelete={(id) => handleDelete(id, setTodos)}
        onToggleComplete={(id) => handleToggleComplete(id, setTodos)}
      />
      <ToastContainer />
    </section>
  )
}
