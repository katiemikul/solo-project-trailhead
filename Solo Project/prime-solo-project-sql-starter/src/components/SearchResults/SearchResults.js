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
import TrailDetails from '../../components/TrailDetails/TrailDetails';

const mapStateToProps = state => ({
    user: state.user,
    search: state.searchTrails,
});

class SearchResults extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        console.log('selecting trail details')

        const action = { type: 'DETAILED_TRAILS', payload: this.props.name };
        this.props.dispatch(action);
        this.sendUserToCorrespondingPage('/details');
        console.log(this.props.name);

        this.props.history.push('/details')
    }

    sendUserToCorrespondingPage = (urlString) => {
        return () => {
          this.props.history.push(urlString);
        }
      };


    render() {

        return (
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
            <TableRow>
                <TableCell>
                    {this.props.name}
                </TableCell>
                <TableCell>
                    {this.props.location}
                </TableCell>
                <TableCell>
                    {this.props.length}
                </TableCell>
                <TableCell>
                    {this.props.difficulty}
                </TableCell>
                <TableCell>
                    <Button onClick={this.handleSubmit} value={this.props.name} id="trail" variant="raised">View Trail Details</Button>
                </TableCell>
            </TableRow>
    </Table>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SearchResults);