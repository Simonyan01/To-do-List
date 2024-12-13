import { filterState, handleAdd, handleAddSubTask, handleDelete, handleToggleComplete } from "@utils/utils"
import { useState, useEffect } from "react"
import { ToDoContext } from "./context"
import { API } from "@api/axios"

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("all")
    const [filterCategory, setFilterCategory] = useState(null)

    useEffect(() => {
        API.get("/todos").then((res) => setTodos(res.data))
    }, [])

    const onAdd = (newTodo) => handleAdd(newTodo, setTodos)
    const onDelete = (id) => handleDelete(id, setTodos)
    const onToggleComplete = (id) => handleToggleComplete(id, setTodos)
    const onAddSubTask = (id, subTask) => handleAddSubTask(id, subTask, setTodos)

    const onFilterChange = (newFilteredItem, category = null) => {
        setFilter(newFilteredItem)
        if (newFilteredItem === "category") {
            setFilterCategory(category)
        } else {
            setFilterCategory(null)
        }
    }

    const filteredTodos = todos.filter(
        filter === "category"
            ? filterState.category(filterCategory)
            : filterState[filter]
    )

    return (
        <ToDoContext.Provider
            value={{
                todos, filteredTodos, filterCategory, filter,
                onFilterChange, onAdd, onDelete,
                onToggleComplete, onAddSubTask,
            }}
        >
            {children}
        </ToDoContext.Provider>
    )
}
