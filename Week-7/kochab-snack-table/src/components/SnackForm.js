import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            snackInput: '',
        }
    }

    handleSnackChange = event => {
        this.setState({
            snackInput: event.target.value,
        }
        );
    }

    submitClicked = () => {
        const action = { type: 'SUBMIT_BUTTON', payload: this.state.snackInput };
        this.props.dispatch(action)
    }
    render() {
        return (
            <div>
                <h2>Let's Add Snacks</h2>
                <input onChange={this.handleSnackChange} value={this.state.snackInput} />
                <button onClick={this.submitClicked}>Add Snacks!</button>
            </div>
        )
    }
}


export default connect()(SnackForm);