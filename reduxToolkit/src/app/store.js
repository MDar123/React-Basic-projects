import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice.js'
import todoSlice from '../features/todoSlice.js'
const store = configureStore({
    reducer:{
        counter:counterSlice,
        todo:todoSlice
    }
})

export default store;