import { useRef, useState } from "react"
import { useTodo } from "../context/TodoContext"

function Form() {
  const { addTodo } = useTodo()
  const [task, setTask] = useState("")
  const todo = useRef()
  todo.current = {
    id: Date.now(),
    todo: task,
  }
  function addtodo(e) {
    e.preventDefault()
    addTodo(todo.current)
    todo.current = {
      id: Date.now(),
      todo: "",
    }
    setTask(todo.current.todo)
  }
  return (
    <>
      <div className="px-6 py-4 border-b border-indigo-100">
        <form action="" className="flex flex-col space-y-3" onSubmit={addtodo}>
          <label htmlFor="addtodo" className="text-lg font-medium text-gray-700">
            Add New Task
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="What needs to be done?"
              className="flex-grow px-4 py-2 border border-indigo-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              disabled={todo.current.todo === ""}
              type="submit"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                todo.current.todo === ""
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md hover:shadow-lg active:shadow-sm hover:translate-y-[-1px] active:translate-y-[1px]"
              }`}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form

