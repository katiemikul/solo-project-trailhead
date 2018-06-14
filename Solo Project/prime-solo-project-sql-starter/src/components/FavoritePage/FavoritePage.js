import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Favorite from '../../components/Favorite/Favorite';
import FavoriteDetails from '../FavoriteDetails/FavoriteDetails';

const mapStateToProps = state => ({
    user: state.user,
    search: state.searchTrails,

});

class FavoritePage extends Component {
    constructor() {
        super();
        this.state = {
            trail_name: '',
            location: '',
            detailsArray: [],
        }
    }

//Gets trails from the database
    getTrails = () => {
        axios.get('/api/favorite').then(response => {
            console.log(response.data);
            this.setState({
                detailsArray: response.data
            });
        }).catch(error => {
            alert('There was an error getting requested trails!');
            console.log(`ERROR trying to GET /api/trails: ${error}`);
        });
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
                trail_name: '',
                [propertyName]: event.target.value,
        });
    }
    sendUserToCorrespondingPage = (urlString) => {
        return () => {
          this.props.history.push(urlString);
        }
      };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('selecting trail details')

    //     const action = { type: 'DETAILED_TRAILS', payload: this.props.name };
    //     this.props.dispatch(action);
    //     this.sendUserToCorrespondingPage('/details');
    //     console.log(this.props.name);

    //     this.props.history.push('/details')
    // }

    componentDidMount = () => {
        this.getTrails();
    }

    // componentDidUpdate() {
    //     // if (!this.props.user.isLoading && this.props.user.userName === null) {
    //     //     this.props.history.push('home');
    //     // }
    // }

    // sendUserToCorrespondingPage = (urlString) => {
    //     return () => {
    //       this.props.history.push(urlString);
    //     }
    //   };

    // // getTrailDetails = () => {
    // //     axios.get('/api/search').then(response => {
    // //         console.log(response.data);
    // //         this.setState({
    // //             searchTrailsArray: response.data
    // //         });
    // //     }).catch(error => {
    // //         alert('There was an error getting requested trails!');
    // //         console.log(`ERROR trying to GET api/trails: ${error}`);
    // //     });
    // // }

    // logout = () => {
    //     //   this.props.dispatch(triggerLogout());
    //     // this.props.history.push('home');
    // }

    render() {
    

        return (
            <div>
                <Nav />

             <body>   
        <h2>My Saved Trails:
            </h2>
    <Card >
                        {this.state.detailsArray.map((trail, i) =>
                            <CardContent key={i}>
                             <Favorite name={trail.trail_name} location={trail.location} length={trail.length} difficulty={trail.difficulty} history={this.props.history}/>
                            </CardContent>
                        )}
                        </Card>
                        </body>
            </div>
       
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(FavoritePage);