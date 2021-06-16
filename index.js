import store from './store/configureStore.js'
import { todoAdded, todoRemoved, todoToggleCompleate } from './store/todos.js'

console.log("intial state", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(todoAdded({ description: 'Drink Boost' }));
store.dispatch(todoAdded({ description: 'Buy Groceries' }));
store.dispatch(todoAdded({ description: 'Do excercize' }));
store.dispatch(todoToggleCompleate({ _id: 3 }));
store.dispatch(todoRemoved({ _id: 1 }));

unsubscribe();