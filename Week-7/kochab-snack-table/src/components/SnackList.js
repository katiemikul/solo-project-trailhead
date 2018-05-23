import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Kochab Snack List</h4>
                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
                <ul>
                    {this.props.reduxState.snackReducer.map(snacks => <p key={snacks}>
                        {snacks} </p>)
                    }
                </ul>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(SnackList);