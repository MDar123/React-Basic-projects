import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo,updateTodo,deleteTodo} from '../features/todoSlice'
const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [title,setTitle] = useState("");
  const [status,setStatus] = useState("Not Completed")
  const [isEditing,setIsEditing] = useState("");
  const [isEditable,setIsEditable] = useState(false)
  const [updatedTitle,setUpdatedTitle] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && status !== ''){
      const data = {
        id:Date.now(),
        title,
        status
      }
      dispatch(addTodo(data));
      setTitle("");
    }
  };
  const handleUpdate = (id,value) => {
    const updatedData = {
      id,
      title:value,
      status
    }
    dispatch(updateTodo(updatedData))
  }

  const onDelete =(id) => {
    // debugger
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <div className="h-screen bg-gray-300">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter Title of todo"
            className="border border-black p-1 rounded-md"
            value={title}
            onChange={ (e) => setTitle(e.target.value) }
          />{" "}
          <br />
          <label htmlFor="select">Select Your Status</label>
          <br />
          <select
            name="status"
            id="selectstatus"
            defaultValue={"not completed"}
            className="border border-black p-1 rounded-md"
            onChange={ (e) => setStatus(e.target.value) }
          >
            <option value="completed">Completed</option>
            <option value="inprogress">In Progress</option>
            <option value="not completed">Not completed</option>
          </select>
          <button
            type="submit"
            className="block rounded-md border-2 border-black px-2 shadow-amber-200 bg-blue-300 mt-2"
          >
            Add Todo
          </button>
        </form>
        <div className="mt-20 w-screen bg-blue-300 text-wrap">
          <ul>
            {/* {todos.map((todo) => (
              <div key={todo.id} value={todo}>
                <li className="text-xl font-bold">{todo.title}</li>
                <p className="text-sm font-light">
                  status :{" "}
                  <span
                    className={`${
                      todo.status === `completed`
                        ? `text-green-500`
                        : `text-black`
                    }`}
                  >
                    {todo.status}
                  </span>{" "}
                </p>
                <code>{todo.id}</code> <br />
                {
                  isEditable?<button className="border-1 border-black px-2 bg-blue-500 mr-1"
                  onClick={ () =>  {
                    setIsEditable( prev => !prev )
                  }}
                  >Save</button>:
                  <button className="border-1 border-black px-2 bg-blue-500 mr-1" 
                  onClick={ () => setIsEditable( (prev) => !prev ) }
                  >Edit</button>
                  
                  }
                <button className="border-1 border-black px-2 bg-red-500">Delete</button>
              </div>
            ))} */}
            {todos.map((todo) => (
  <div key={todo.id}>
    {isEditing === todo.id && isEditable ? (
      <input
        type="text"
        defaultValue={todo.title}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        className="border border-black p-1"
      />
    ) : (
      <span onClick={() => setIsEditing(todo.id)}>{todo.title}</span>
    )}
    <p className="text-sm font-light">
                  status :{" "}
                  <span
                    className={`${
                      todo.status === `completed`
                        ? `text-green-500`
                        : `text-black`
                    }`}
                  >
                    {todo.status}
                  </span>{" "}
                </p>
    {
      isEditable? 
      <button onClick={ () => {
        setIsEditable(prev => !prev)
        handleUpdate(todo.id,updatedTitle)
      } }
       className="border-1 border-black px-2 bg-blue-500">Save</button>
      :
      <button onClick={() => {
        setIsEditing(todo.id)
        setIsEditable(prev => !prev)
      }} className="border-1 border-black px-2 bg-blue-500 mr-1" >Edit</button> 
    }
    <button onClick={() => onDelete(todo.id)} className="border-1 border-black px-2 bg-red-500">Delete</button>
  </div>
))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;