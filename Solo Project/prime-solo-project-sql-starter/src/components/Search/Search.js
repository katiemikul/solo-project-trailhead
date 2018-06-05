import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';

const mapStateToProps = state => ({
    user: state.user,
});

class Search extends Component {
    constructor() {
        super();
            this.state = {
                trailsArray: [],
            }
    }

    // searchRequest = function(input) {
    //     axios({
    //         method: 'GET',
    //         url: 'https://www.hikingproject.com/data',
    //         params: {
    //             api_key: '200273964-beb10d19c250ee29496c886bf07efaf8',
    //             q: input,
    //         }
    //     })
    //     .then(function(response) {
    //         console.log(response);
    //         searchFindings.details = response.data;
    //         console.log(searchFindings);
            
    //     })
    //     .catch(function(error) {
    //         console.log(`Error trying to GET /api/trails', ${error}`);
    //     });
    // }

    getTrails = () => {
        axios.get('/api/trails').then(response => {
            console.log(response.data);
            this.setState({
                trailsArray: response.data
            });
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET /api/trails: ${error}`);
        });
    }

    componentDidMount = () => {
        this.getTrails();
    }


    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        //   this.props.dispatch(triggerLogout());
        this.props.history.push('home');
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    {/* <h1>
                        Search For Trails
            </h1>
                    <input placeholder='City'></input>
                    <input placeholder='State'></input>
                    <button>Search</button> */}
                    <br />
                    <button
                        onClick={this.logout}
                    >
                        Log Out
            </button>
          </div>
            );
        }

        return (
            <div>
                <Nav />
                {content}

                <h1>
             Search For Trails
            </h1>
            <input placeholder='City'></input>
            <input placeholder='State'></input>
            <button>Search</button>
            <br/>
            Search Results:
            {JSON.stringify(this.state.trailsArray)}
            </div>
       
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Search);

