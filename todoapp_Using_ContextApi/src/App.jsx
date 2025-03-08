import { useState } from "react"
import { TodoProvider } from "./context/TodoContext"
import {Form,TodoList} from './components/'
function App() {
  const [todos, setTodos] = useState([])
  function addTodo(todo) {
    setTodos((previous) => [...previous, todo])
  }
  function deleteTodo(id) {
    setTodos((current) => current.filter((val) => val.id !== id))
  }
  function updateTodo(upDatedTodo, id) {
    setTodos((current) => current.map((value) => (value.id === id ? upDatedTodo : value)))
  }
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-purple-100">
          <h1 className="text-3xl font-bold text-center py-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
            Todo App
          </h1>
          <Form />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

