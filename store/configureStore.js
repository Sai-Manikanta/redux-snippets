import { createStore, combineReducers } from 'redux'
import todosReducer from './todos/todosReducer.js'

const rootReducer = combineReducers({
    todos: todosReducer
});

const store = createStore(rootReducer);

export default store;