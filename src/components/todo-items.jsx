export const ToDoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div className={`p-4 rounded-lg shadow-sm mb-4 flex items-center justify-between ${todo.completed
      ? "bg-green-100 text-green-800"
      : "bg-neutral-100 text-neutral-800"}`
    }
    >
      <p className={`text-base font-medium ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`px-3 py-1 rounded-lg transition ${todo.completed
            ? "bg-red-200 text-red-800 hover:bg-red-300"
            : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"}`
          }
        >
          {todo.completed ? "Cancel" : "Complete"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-red-200 text-red-800 rounded-lg hover:bg-red-300 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
