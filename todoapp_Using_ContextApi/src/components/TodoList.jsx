import { useTodo } from "../context/TodoContext"
import TodoItem from "./TodoItem"

function TodoList() {
  const { todos } = useTodo()
  return (
    <>
      <div className="px-4 pb-6">
        <h1 className="text-center text-xl font-bold text-gray-700 my-4">Your Tasks</h1>
        <ul className="space-y-2 max-h-[60vh] overflow-y-auto px-2 py-3">
          {todos.length > 0 ? (
            todos.map((value) => <TodoItem key={value.id} todo={value} />)
          ) : (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 text-center border border-dashed border-indigo-200">
              <h2 className="font-medium text-lg text-gray-600">No tasks yet</h2>
              <p className="text-gray-500 mt-2">Start adding tasks to your list</p>
            </div>
          )}
        </ul>
      </div>
    </>
  )
}

export default TodoList

