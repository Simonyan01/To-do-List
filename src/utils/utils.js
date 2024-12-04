export const handleAdd = (newText, setTodos) => {
    const newTodo = {
        id: Date.now(),
        text: newText,
        completed: false,
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
}

export const handleSave = (text, setText, onAdd, setError) => {
    if (!text.trim()) {
        return setError("Please fill all the fields")
    }

    onAdd(text);
    setText('');
    setError(null)
}

export const handleDelete = (id, setTodos) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

export const handleToggleComplete = (id, setTodos) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        )
    );
};

export const filterState = {
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
    all: () => true
}