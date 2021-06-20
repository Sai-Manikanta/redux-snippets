import { Component } from 'react'
import { connect } from 'react-redux'
import { loadBugs, removeBug, resolveBug } from '../store/bugs'

class BugsList extends Component {

    componentDidMount(){
        this.props.loadBugs()
    }

    render(){
        return(
            <div>
                {this.props.bugs.list.map(bug => (
                    <div key={bug._id}>
                        <p 
                            onClick={() => this.props.resolveBug(bug._id)}
                            style={{ textDecoration: `${bug.resolve ? 'line-through' : 'none'}` }}
                        >
                            {bug.description}
                        </p>
                        <button 
                            onClick={() => this.props.removeBug(bug._id)}
                        >
                            resolve
                        </button>
                    </div>
                ))}
            </div>  
        )
    }
} 

function mapStateToProps(store){
    return {
        bugs: store.entities.bugs
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadBugs: () => dispatch(loadBugs()),
        removeBug: id => dispatch(removeBug(id)),
        resolveBug: id => dispatch(resolveBug(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BugsList)
