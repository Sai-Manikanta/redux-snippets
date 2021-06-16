// Action types
const TODO_ADDED = "todoAdded";
const TODO_COMPLEATE_TOGGLED = "todoCompleateToggled";
const TODO_REMOVED = "todoRemoved";

// Action creators
export const addTodo = description => ({
    type: TODO_ADDED,
    payload: {
        description
    }
});

export const toggleTodoCompleate = _id => ({
    type: TODO_COMPLEATE_TOGGLED,
    payload: {
        _id
    }
});

export const removeTodo = _id => ({
    type: TODO_REMOVED,
    payload: {
        _id
    }
})

// Reducer
let id = 0;

function todosReducer(todos = [], action){
    switch(action.type){
        case TODO_ADDED:
            return [...todos, { 
                 _id: ++id,
                 description: action.payload.description,
                 compleate: false
            }]
        case TODO_REMOVED:
            return todos.filter(todo => todo._id !== action.payload._id);
        case TODO_COMPLEATE_TOGGLED:
            return todos.map(todo => todo._id === action.payload._id ? { ...todo, compleate: !todo.compleate } : todo)
        default:
            return todos
    }
}

export default todosReducer