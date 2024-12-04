import { filterState, handleAdd, handleDelete, handleToggleComplete } from "@utils/utils"
import { ToDoFilter } from "./todo-filter"
import { AddTodo } from "./todo-add"
import { data } from "@data/todos"
import { useState } from "react"
import { List } from "./list"

export const ToDoList = () => {
  const [todos, setTodos] = useState(data)
  const [filter, setFilter] = useState("all")

  const filteredTodos = todos.filter(filterState[filter])

  return (
    <div className="p-6 bg-neutral-100 text-neutral-800 rounded-lg shadow-lg">
      <p className="text-2xl font-semibold mb-4 text-neutral-700 text-center">To-Do List</p>
      <div className="mb-4">
        <AddTodo onAdd={(newText) => handleAdd(newText, setTodos)} />
      </div>
      <div className="mb-4">
        <ToDoFilter
          filter={filter}
          onFilterChange={(newFilteredItem) => setFilter(newFilteredItem)}
        />
      </div>
      <List
        items={filteredTodos}
        onDelete={(id) => handleDelete(id, setTodos)}
        onToggleComplete={(id) => handleToggleComplete(id, setTodos)}
      />
    </div>
  )
}
