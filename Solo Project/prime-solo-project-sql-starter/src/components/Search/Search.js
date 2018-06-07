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

    //Get request to Hiking Project API
    searchTrails = () => {
        axios.get('/api/api').then(response => {
            console.log(response.data);
            this.setState({
                searchTrailsArray: response.data
            });
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET api/trails: ${error}`);
        });
    }

    componentDidUpdate() {
        this.searchTrails();
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
                <form className="Search">
                <Nav />
                {content}

                <h1>
                    Search For Trails
            </h1>
                <input placeholder='Latitude'></input>
                <input placeholder='Longitude'></input>
                <input placeholder='City'></input>
                <input placeholder='State'></input>
                <button>Search</button>
                <br />
                Search Results:
                {JSON.stringify(this.state.searchTrailsArray)}
            </form>
            <br />
            <form className="SearchResults">
                <Table class>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Trail Name
                            </TableCell>
                            <TableCell>
                                Location
                            </TableCell>
                            <TableCell>
                                Difficulty
                             </TableCell>
                            <TableCell>
                                Length
                            </TableCell>
                            <TableCell>
                                Summary
                             </TableCell>
                            <TableCell>
                                Ascent
                            </TableCell>
                            <TableCell>
                                Descent
                            </TableCell>
                            <TableCell>
                                Condition Status
                            </TableCell>
                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.classFeedback.map((student, i) =>
                            <TableRow key={i}>
                                <TableCell>
                                    {student.feeling}
                                </TableCell>
                                <TableCell>
                                    {student.understanding}
                                </TableCell>
                                <TableCell>
                                    {student.support}
                                </TableCell>
                                <TableCell>
                                    {student.comments}
                                </TableCell>
                                <TableCell>
                                    <Button>Save to Favorites</Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                </form>
            </div>
        
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Search);

