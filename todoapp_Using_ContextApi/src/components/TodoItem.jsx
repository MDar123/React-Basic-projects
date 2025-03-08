import { Pencil, Trash2, Save } from "lucide-react"
import { useRef, useState } from "react"
import { useTodo } from "../context/TodoContext"
function TodoItem({ todo }) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [text, setText] = useState(todo.todo)
  const updatedTodo = useRef()
  updatedTodo.current = {
    id: todo.id,
    todo: todo.todo,
  }
  const { updateTodo, deleteTodo } = useTodo()
  function update() {
    updatedTodo.current = {
      id: todo.id,
      todo: text,
    }
    updateTodo(updatedTodo.current, todo.id)
  }
  return (
    <>
      {
        <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg shadow-sm mb-2 border-l-4 border-indigo-400 transition-all duration-300 hover:shadow-md group">
          <input
            type="checkbox"
            value={isCompleted}
            onClick={() => setIsCompleted((prev) => !prev)}
            className="h-5 w-5 rounded-full border-2 border-indigo-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer transition-all duration-200"
          />
          <div className="flex-grow">
            {isEditable ? (
              <input
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                }}
                readOnly={!isEditable}
                className="w-full px-3 py-1 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
              />
            ) : (
              <li
                className={`${isCompleted ? `line-through text-gray-500 opacity-75` : ``} list-none font-medium text-gray-800 transition-all duration-300`}
              >
                {todo.todo}
              </li>
            )}
          </div>
          <div className="flex gap-2">
            <button
              disabled={isCompleted}
              className={`p-1.5 rounded-full ${
                isCompleted
                  ? `text-gray-400 opacity-50 cursor-not-allowed`
                  : `text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200`
              } 
                        transition-colors duration-200`}
              onClick={() => {
                setIsEditable((current) => !current)
              }}
            >
              {isEditable ? (
                <li onClick={update} className="list-none">
                  <Save className="h-5 w-5" />
                </li>
              ) : (
                <Pencil className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1.5 rounded-full text-red-500 hover:bg-red-100 active:bg-red-200 transition-colors duration-200"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default TodoItem

