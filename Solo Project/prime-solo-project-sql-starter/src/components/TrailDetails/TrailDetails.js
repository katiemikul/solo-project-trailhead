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
            searchTrailsArray: {},
        }
    }

    //Get request to Database
    detailedTrail = () => {
        console.log(this.props.search);
        axios.get('/api/search', { params: { trail_name: this.props.search.searchDetails } }).then(response => {
            console.log(response.data);
            console.log(this.props.trail_name);
            this.setState({
                searchTrailsArray: response.data[0]
            });
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET api/trails: ${error}`);
        });
    }

    componentDidMount() {
        this.detailedTrail();
    }

    componentWillUpdate() {
        if (this.props.trail_name === this.props.search.searchDetails.trail_name) {
            console.log('it worked!!');
        }
        else if (this.props.trail_name != this.props.search.searchDetails.trail_name) {
            console.log('there was an error');
        };
            
    }

    render() {
        let content = null;
        return (
            <div>
                <Nav />
                {content}

                <p>Trail Details</p>
                {JSON.stringify(this.props.trail_name)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(TrailDetails);