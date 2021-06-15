export const addTodo = description => ({
    type: "todoAdded",
    payload: {
        description
    }
});

export const toggleTodoCompleate = _id => ({
    type: "todoCompleateToggle",
    payload: {
        _id
    }
});

export const removeTodo = _id => ({
    type: "todoRemoved",
    payload: {
        _id
    }
})