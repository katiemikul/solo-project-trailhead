import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
    user: state.user,
});

class FavoriteDetails extends Component {
    constructor() {
        super();
        this.state = {
            trailsArray: [],
        }
    }

//Gets trails from the database - NEED TO UPDATE TO PULL FROM JUNCTION TABLE!!
    getTrails = () => {
        axios.get('/api/favorite').then(response => {
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
       
    }

    componentDidUpdate() {
        // if (!this.props.user.isLoading && this.props.user.userName === null) {
        //     this.props.history.push('home');
        // }
    }

    sendUserToCorrespondingPage = (urlString) => {
        // return () => {
        //   this.props.history.push(urlString);
        // }
      };

    // postFavorites = () => {
    //     let trail=this.props.trailInfo.trail_id;
    //     axios({
    //         method: 'POST',
    //         url: '/api/favorite',
    //         data: trail,
    //     }).then((response) => {
    //         console.log('the post worked');
    //     }).catch((error) => {
    //         console.log('error on the post', error);
    //     })
    // }

    logout = () => {
        //   this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
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

                <h2 class='feature'>
                    My Saved Trails:
            </h2>
            {/* {JSON.stringify(this.state.trailsArray)} */}
            <Table className="SavedTrails">
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
                        {this.state.trailsArray.map((trail, i) =>
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
export default connect(mapStateToProps)(FavoriteDetails);