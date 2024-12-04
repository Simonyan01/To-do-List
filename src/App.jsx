import { ToDoList } from "@components/todo-list";

export default function App() {
  return (
    <section className="min-h-screen bg-neutral-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <ToDoList />
      </div>
    </section>
  )
}
