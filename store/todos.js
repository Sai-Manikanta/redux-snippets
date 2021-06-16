//import { createAction } from '@reduxjs/toolkit'
import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

let id = 0;

const slice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded: (todos, action) => {
            console.log(todos);
            todos.push({
                _id: ++id, 
                description: action.payload.description, 
                compleate: false
            })
        },
        todoRemoved: (todos, action) => {
            const index = todos.findIndex(todo => todo._id === action.payload._id);
            todos.splice(index, 1);
        },
        todoToggleCompleate: (todos, action) => {
            const index = todos.findIndex(todo => todo._id === action.payload._id);
            todos[index].compleate = !todos[index].compleate;
        }
    }
});

export const { todoAdded, todoRemoved, todoToggleCompleate } = slice.actions;
export default slice.reducer


