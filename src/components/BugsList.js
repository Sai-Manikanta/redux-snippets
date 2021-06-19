import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadBugs, removeBug, resolveBug } from '../store/bugs'

function BugsList() {
    const { list: bugs } = useSelector(store => store.entities.bugs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBugs())
    },[dispatch])

    return (
        <div>
            <button onClick={() => dispatch(loadBugs())}>
                Load bugs
            </button>
            {bugs.map(bug => (
                <div key={bug._id}>
                    <p 
                        onClick={() => dispatch(resolveBug(bug._id))}
                        style={{ textDecoration: `${bug.resolve ? 'line-through' : 'none'}` }}
                    >
                        {bug.description}
                    </p>
                    <button onClick={() => dispatch(removeBug(bug._id))}>
                        resolve
                    </button>
                </div>
            ))}
        </div>
    )
}

export default BugsList
