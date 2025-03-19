import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todo',
    initialState : {
        todos:[]
    },
    reducers : {
        addTodo : (state,action) => {
           state.todos.push(action.payload)
        },
        updateTodo : (state,action) => {
           state.todos = state.todos.map( val => val.id === action.payload.id ? action.payload : val )
        },
        deleteTodo: (state,action) => {
           state.todos = state.todos.filter( val => val.id !== action.payload )
        }
    }
})

export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;