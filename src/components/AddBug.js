import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addBug } from '../store/bugs'

function AddBug() {
    const descInputRef = useRef();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const description = descInputRef.current.value;
        dispatch(addBug(description));
        descInputRef.current.value = '';
    }

    return (
        <div>
            <h1>Add Bug</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={descInputRef} />
                <button tyep="submit">Add bug</button>
            </form>
        </div>
    )
}

export default AddBug
