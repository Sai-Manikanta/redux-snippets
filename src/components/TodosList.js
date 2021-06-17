import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadTodos, compleateTodo, removeTodo } from '../store/todos'

function TodosList() {
    const { loading, list: todos, error } = useSelector(store => store.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    },[])

    return (
        <div className="todo-list">
            {todos.map(todo => (
                <div key={todo.id} className="todo-item">
                    <p 
                        onClick={() => dispatch(compleateTodo(todo.id))}
                        style={{ textDecoration: `${todo.complete ? 'line-through' : 'none' }` }}
                    >
                        {todo.description}
                    </p>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TodosList
