import store from './store/configureStore.js'

console.log("intial state", store.getState());

const unSubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch({
    type: "todoAdded",
    payload: {
        description: "Drink milk"
    }
})

store.dispatch({
    type: "todoAdded",
    payload: {
        description: "Buy Groceries"
    }
})

store.dispatch({
    type: "todoAdded",
    payload: {
        description: "Car Service"
    }
})

store.dispatch({
    type: "todoCompleateToggle",
    payload: {
        _id: 3
    }
})

store.dispatch({
    type: "todoRemoved",
    payload: {
        _id: 1
    }
})

unSubscribe();