import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../features/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Not Completed");
  const [isEditing, setIsEditing] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status !== "") {
      const data = {
        id: Date.now(),
        title,
        status,
      };
      dispatch(addTodo(data));
      setTitle("");
    }
  };

  const handleUpdate = (id, value) => {
    const updatedData = {
      id,
      title: value,
      status,
    };
    dispatch(updateTodo(updatedData));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Todo App</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              placeholder="Enter Title of todo"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-200"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="select" className="block text-gray-700 font-semibold">Select Your Status</label>
            <select
              name="status"
              id="selectstatus"
              className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-200"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="completed">Completed</option>
              <option value="inprogress">In Progress</option>
              <option value="not completed">Not completed</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Todo
          </button>
        </form>
      </div>

      <div className="mt-10 w-full max-w-md">
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
              {isEditing === todo.id && isEditable ? (
                <input
                  type="text"
                  defaultValue={todo.title}
                  onChange={(e) => setUpdatedTitle(e.target.value)}
                  className="border border-gray-300 p-2 rounded-md w-full focus:ring focus:ring-blue-200"
                />
              ) : (
                <span
                  onClick={() => setIsEditing(todo.id)}
                  className="text-lg font-semibold cursor-pointer hover:text-blue-500"
                >
                  {todo.title}
                </span>
              )}
              <p className="text-sm text-gray-600">Status: 
                <span className={`ml-2 font-medium ${todo.status === "completed" ? "text-green-500" : "text-gray-800"}`}>{todo.status}</span>
              </p>
              <div className="flex gap-2 mt-2">
                {isEditable ? (
                  <button
                    onClick={() => {
                      setIsEditable((prev) => !prev);
                      handleUpdate(todo.id, updatedTitle);
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsEditing(todo.id);
                      setIsEditable((prev) => !prev);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;