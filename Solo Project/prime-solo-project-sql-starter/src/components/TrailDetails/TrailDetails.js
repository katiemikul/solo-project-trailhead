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

// import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    search: state.searchTrails,
});

class TrailDetails extends Component {
    constructor() {
        super();
        this.state = {
            trail_name: '',
            location: '',
            detailTrail: {},
            trailInfo: {},
        }
    }

    //Get request to Database
    detailedTrail = () => {
        console.log(this.props.search);
        axios.get('/api/detail', { params: { trail_name: this.props.search.searchDetails } }).then(response => {
            console.log(response.data[0].trail_name);
            console.log(this.props.search.searchDetails);
            this.setState({
                detailTrail: response.data[0]
            });
            this.trailInfo();
           
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET api/trails: ${error}`);
        });
    }

    trailInfo = () => {
        axios.get('/api/detail', { params: {trail_name: this.state.detailTrail.trail_name } }).then(response => {
            console.log(response.data[0].trail_name);
            console.log(response.data);
            this.setState({
                trailInfo: response.data
            });
           
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET api/trails: ${error}`);
        });
    }

    componentDidMount() {
        this.detailedTrail();
    }

    render() {
        // let content = null;
        console.log(this.state.detailTrail.trail_name);
            console.log(this.props.search.searchDetails);
            if (this.state.detailTrail.trail_name === this.props.search.searchDetails) {
                console.log('it worked!!');
                // this.trailInfo();
            }
            else if (this.props.search !== this.props.search.searchDetails.trail_name) {
                console.log('there was an error');
            };
        return (
            <div>
                <Nav />
                {/* {content} */}

                <p>Trail Details</p>
                {JSON.stringify(this.state.detailTrail.trail_name)}
                {JSON.stringify(this.state.trailInfo)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(TrailDetails);