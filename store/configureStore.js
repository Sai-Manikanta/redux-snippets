import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;
import todosReducer from './todos.js';

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
});

export default store