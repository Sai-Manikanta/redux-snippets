//import { createAction } from '@reduxjs/toolkit'
import pkg from '@reduxjs/toolkit';
const { createAction, createReducer } = pkg;

export const todoAdded = createAction('todoAdded');
export const todoRemoved = createAction('todoRemoved');
export const todoToggleCompleate = createAction('todoToggleCompleate');

// [ { id: 1, description: 'Do yoga', compleate: false } ]
let id = 0;

const todosReducer = createReducer([], (builder) => {
    builder
        .addCase(todoAdded, (todos, action) => {
            todos.push({ 
                _id: ++id, 
                description: action.payload.description, 
                compleate: false 
            })
        })
        .addCase(todoRemoved, (todos, action) => {
            const index = todos.findIndex(todo => todo._id === action.payload._id);
            todos.splice(index, 1);
        })
        .addCase(todoToggleCompleate, (todos, action) => {
            const index = todos.findIndex(todo => todo._id === action.payload._id);
            todos[index].compleate = !todos[index].compleate;
        })
})

export default todosReducer
