import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import SnackForm from './components/SnackForm';
import SnackList from './components/SnackList';


class App extends Component {
 

  addSnackClicked = () => {
    //dispatch takes in an 'action'
    const action = { type: 'SUBMIT_BUTTON' };
    this.props.dispatch(action)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      snackInput: [],
    });
  }


  render() {
    return (
      <div className="App">
        <h3> SNACKS! Homework</h3>
        <form onSubmit={this.handleSubmit}>
          
        <SnackForm />
        <SnackList />
        </form>
      </div>
    );
  }
}

export default connect()(App);