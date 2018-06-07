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

class FavoritePage extends Component {
    constructor() {
        super();
        this.state = {
            trailsArray: [],
        }
    }

//Gets trails from the database
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
                    My Saved Trails:
            </h1>
            {JSON.stringify(this.state.trailsArray)}
            </div>

        //     <div className="SearchResults">
        //         <Table>
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell>
        //                         Trail Name
        // </TableCell>
        //                     <TableCell>
        //                         Location
        // </TableCell>
        //                     <TableCell>
        //                         Difficulty
        // </TableCell>
        //                     <TableCell>
        //                         Length
        // </TableCell>
        //                     <TableCell>
        //                         Summary
        // </TableCell>
        //                     <TableCell>
        //                         Ascent
        // </TableCell>
        //                     <TableCell>
        //                         Descent
        // </TableCell>
        //                     <TableCell>
        //                         Condition Status
        // </TableCell>
        //                     <TableCell>
        //                     </TableCell>
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {this.state.classFeedback.map((student, i) =>
        //                     <TableRow key={i}>
        //                         <TableCell>
        //                             {student.feeling}
        //                         </TableCell>
        //                         <TableCell>
        //                             {student.understanding}
        //                         </TableCell>
        //                         <TableCell>
        //                             {student.support}
        //                         </TableCell>
        //                         <TableCell>
        //                             {student.comments}
        //                         </TableCell>
        //                         <TableCell>
        //                             <Button>Save to Favorites</Button>
        //                         </TableCell>
        //                     </TableRow>
        //                 )}
        //             </TableBody>
        //         </Table>
        //     </div>
       
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(FavoritePage);