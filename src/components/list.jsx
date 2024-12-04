import { ToDoItem } from "./todo-items";

export const List = ({ items, onDelete, onToggleComplete }) => {
  return (
    <div className="p-4 bg-neutral-100 text-neutral-800 rounded-lg shadow-sm">
      <p className="text-neutral-700 text-base font-medium mb-4">List</p>
      <div className="space-y-4">
        {
          items?.length === 0 ? (
            <span>No tasks available</span>
          ) : (
            items.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))
          )
        }
      </div>
    </div>
  );
};
