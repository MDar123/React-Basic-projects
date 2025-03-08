import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[],
    addTodo:() => {},
    updateTodo:() => {},
    deleteTodo:() => {},
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}