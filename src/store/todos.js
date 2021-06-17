import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const slice = createSlice({
    name: 'todos',
    initialState: {
        loading: false,
        list: [],
        error: null
    },
    reducers: {
        todosRequested: (todos) => {
            todos.loading = true;
        },
        todosReceived: (todos, action) => {
            todos.loading = false;
            todos.list = action.payload
        },
        todosRequestFailed: (todos, action) => {
            todos.loading = false;
            todos.error = action.payload
        },
        todoAdded: (todos, action) => {
            todos.list.push(action.payload)
        },
        todoCompleted: (todos, action) => {
            const index = todos.list.findIndex(todo => todo.id === action.payload);
            todos.list[index].complete = true;
        },
        todoRemoved: (todos, action) => {
            const index = todos.list.findIndex(todo => todo.id === action.payload);
            todos.list.splice(index, 1);
        }
    }
});

const { 
    todosRequested, 
    todosReceived, 
    todosRequestFailed,
    todoAdded, 
    todoCompleted, 
    todoRemoved 
} = slice.actions;

export default slice.reducer;

// Action creators - for api calls (dispatch, getStore) => {} 
export const loadTodos = () => {
    return async (dispatch) => {
        dispatch(todosRequested())
        try {
            const res = await axios.get('http://localhost:3000/todos');
            dispatch(todosReceived(res.data))
        } catch (err) {
            dispatch(todosRequestFailed(err.message))
        }
    }   
}

export const addTodo = (description) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:3000/todos', {
                description,
                complete: false
            });
            dispatch(todoAdded(res.data));
        } catch (err) {
            dispatch(todosRequestFailed(err.message))
        }
    }   
}

export const compleateTodo = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.patch(`http://localhost:3000/todos/${id}`, {
                complete: true
            });
            dispatch(todoCompleted(res.data.id))
        } catch (err) {
            dispatch(todosRequestFailed(err.message))
        }
    }   
}

export const removeTodo = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3000/todos/${id}`);
            dispatch(todoRemoved(res.data.id))
        } catch (err) {
            dispatch(todosRequestFailed(err.message))
        }
    }   
}
