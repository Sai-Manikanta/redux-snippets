import store from './store/configureStore.js'
import { addTodo, toggleTodoCompleate, removeTodo } from './store/todos/actionCreators.js'

console.log("intial state", store.getState());

const unSubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Drink milk'));
store.dispatch(addTodo('Buy groceries'));
store.dispatch(addTodo('Car Service'));
store.dispatch(toggleTodoCompleate(3))
store.dispatch(removeTodo(1))

unSubscribe();