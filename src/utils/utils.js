import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import { API } from "@api/axios"

export const handleAdd = async (newTodo, setTodos) => {
    try {
        const res = await API.post("/todos", {
            text: newTodo.text,
            description: newTodo.description,
            completed: false,
        })

        setTodos((prevTodos) => [...prevTodos, res.data])
    } catch (err) {
        console.error(`Failed to add new todo: ${err}`)
    }
}

export const handleDelete = async (id, setTodos) => {
    try {
        const res = await API.delete(`/todos/${id}`)

        if (res.status === 200) {
            toast.success("Todo deleted successfully!")
            setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
        } else {
            console.error(`Failed to delete todo: Unexpected response status ${res.status}`)
        }
    } catch (err) {
        console.error(`Failed to delete todo: ${err}`)
        toast.error("Failed to delete todo")
    }
}

export const handleToggleComplete = async (id, setTodos) => {
    try {
        const res = await API.get(`/todos/${id}`)
        const updatedResponse = await API.patch(`/todos/${id}`, { completed: !res.data.completed })

        if (updatedResponse.status === 200) {
            setTodos((prevTodos) => (
                prevTodos.map((todo) =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ))
            )
        } else {
            console.error(`Failed to toggle completion: Unexpected response status ${res.status}`)
        }
    } catch (err) {
        console.error(err)
    }
}

export const filterState = {
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
    all: () => true
}