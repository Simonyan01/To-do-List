import { handleSave } from "@utils/utils";
import { useState } from "react";

export const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState(null)

  return (
    <div className="p-4 bg-neutral-100 text-neutral-800 rounded-lg shadow-sm">
      <p className="text-neutral-700 text-base font-medium mb-2">Add Todo</p>
      <div className="flex items-center space-x-2">
        {error && <p className="bg-red-400 p-2">{error}</p>}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Enter a new task"
          className="flex-1 p-2 border border-neutral-300 rounded-lg text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        />
        <button
          onClick={() => handleSave(text, setText, onAdd, setError)}
          className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};
