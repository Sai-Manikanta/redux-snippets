import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todos'

function AddTodo() {
    const todoInputRef = useRef();

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const description = todoInputRef.current.value;
        dispatch(addTodo(description))
        todoInputRef.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={todoInputRef} />
            <button type="submit">Create</button>
        </form>
    )
}

export default AddTodo
