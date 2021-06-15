let id = 0;

function todosReducer(todos = [], action){
    switch(action.type){
        case "todoAdded":
            return [...todos, { 
                 _id: ++id,
                 description: action.payload.description,
                 compleate: false
            }]
        case "todoRemoved":
            return todos.filter(todo => todo._id !== action.payload._id);
        case "todoCompleateToggle":
            return todos.map(todo => todo._id === action.payload._id ? { ...todo, compleate: !todo.compleate } : todo)
        default:
            return todos
    }
}

export default todosReducer