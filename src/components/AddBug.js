import { Component } from 'react'
import { connect } from 'react-redux'
import { addBug } from '../store/bugs'

class AddBug extends Component {
    state = {
        description: ''
    }

    handleChange = e => {
        this.setState({ description: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addBug(this.state.description);
        this.setState({ description: '' });
    }

    render(){
        return(
            <div>
                <h1>Add Bug</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button tyep="submit">Add bug</button>
                </form>
            </div>
        )   
    }
}

function mapDispatchToProps(dispatch){
    return {
        addBug: description => dispatch(addBug(description))
    }
}

export default connect(null, mapDispatchToProps)(AddBug)
