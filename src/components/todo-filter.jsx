export const ToDoFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="p-4 bg-neutral-100 text-neutral-800 rounded-lg shadow-sm">
      <p className="text-neutral-700 text-base font-medium mb-2">To-Do Filter</p>
      <div className="flex space-x-2">
        <button
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2 rounded-lg transition ${filter === "all"
            ? "bg-neutral-400 text-white"
            : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"}`
          }
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`px-4 py-2 rounded-lg transition ${filter === "active"
            ? "bg-neutral-400 text-white"
            : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"}`
          }
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={`px-4 py-2 rounded-lg transition ${filter === "completed"
            ? "bg-neutral-400 text-white"
            : "bg-neutral-200 text-neutral-800 hover:bg-neutral-300"}`
          }
        >
          Completed
        </button>
      </div>
    </div>
  );
};


