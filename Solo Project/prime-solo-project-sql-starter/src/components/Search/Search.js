import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
    user: state.user,
});

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTrailsArray: [],
        }
    }

    //Get request to Database
    searchTrails = () => {
        axios.get('/api/search').then(response => {
            console.log(response.data);
            this.setState({
                searchTrailsArray: response.data
            });
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET api/trails: ${error}`);
        });
    }

    // findTrails = () => {
    //     axios.get('/api/search', (req, res) => {
    //         axios({
    //             method: 'GET',
    //             params: {
    //                 location: '',
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //             this.setState({
    //                 trailSearchArray: response.data
    //             });
    //         }).catch(error => {
    //             alert('There was an error getting requested trails!');
    //         console.log(`ERROR trying to GET api/trails: ${error}`);
    //         });
    //     })
    // }

// componentDidMount() {
//     this.searchTrails();
// }

    componentDidUpdate() {
        // this.searchTrails();
        // if (!this.props.user.isLoading && this.props.user.userName === null) {
        //     this.props.history.push('home');
        // }
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            newTrailsArray: {
                ...this.state.newTrailsArray,
                [propertyName]: event.target.value,
            }
        });
    }
    sendUserToCorrespondingPage = (urlString) => {
        return () => {
          this.props.history.push(urlString);
        }
      };

    // getTrailDetails = () => {
    //     axios.get('/api/search').then(response => {
    //         console.log(response.data);
    //         this.setState({
    //             searchTrailsArray: response.data
    //         });
    //     }).catch(error => {
    //         alert('There was an error getting requested trails!');
    //         console.log(`ERROR trying to GET api/trails: ${error}`);
    //     });
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('sending search request to database')

        // const action = { type: 'SEARCH_TRAILS', payload: this.state.searchTrailsArray };
        // this.props.dispatch(action);

        this.props.history.push('/success')
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
                <form className="Search" onSubmit={this.handleSubmit}>
                <h1>
                    Search For Trails
            </h1>
                <input onChange={this.handleChange('location')} value={this.state.searchTrailsArray.location}placeholder='City, State'></input>
                <Button onClick={this.searchTrails}>Search Trails</Button>
                <br />
                Search Results:
                {/* {JSON.stringify(this.state.searchTrailsArray)} */}
            </form>
            <br />
                <Table className="SearchResults">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Trail Name
                            </TableCell>
                            <TableCell>
                                Location
                            </TableCell>
                            <TableCell>
                                Length
                             </TableCell>
                            <TableCell>
                                Difficulty
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.searchTrailsArray.map((trail, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    {trail.trail_name}
                                </TableCell>
                                <TableCell>
                                    {trail.location}
                                </TableCell>
                                <TableCell>
                                    {trail.length}
                                </TableCell>
                                <TableCell>
                                    {trail.difficulty}
                                </TableCell>
                                <TableCell>
                                    <Button id="trail" variant="raised" onClick={this.sendUserToCorrespondingPage('/details')}>View Trail Details</Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Search);

