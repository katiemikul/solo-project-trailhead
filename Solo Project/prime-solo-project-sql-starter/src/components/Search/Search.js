import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchResults from '../../components/SearchResults/SearchResults';

const mapStateToProps = state => ({
    user: state.user,
});

class Search extends Component {
    constructor() {
        super();
        this.state = {
            trail_name: '',
            location: '',
            searchTrailsArray: [
            ],
        }
    }

    //Get request to Database
    searchTrails = () => {
        axios.get('/api/search', {params: {location: this.state.location}}).then(response => {
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

    //     const action = { type: 'DETAILED_TRAILS', payload: this.state.trail_name};
    //     this.props.dispatch(action);

    //     console.log(this.state.trail_name);

    //     this.props.history.push('/success')
    // }

    logout = () => {
        //   this.props.dispatch(triggerLogout());
        this.props.history.push('home');
    }

    render() {

        return (
            <div>

                <Nav />
                {/* {content} */}
        <body className="Search" onSubmit={this.handleSubmit}>
                <h1>
                    Search For Trails
            </h1>
                <input onChange={this.handleChange('location')} value={this.state.location} placeholder='City, State'></input>
                <Button onClick={this.searchTrails}>Search Trails</Button>
                <br />
                
            </body>
            <br />
    <Card >
                        {this.state.searchTrailsArray.map((trail, i) =>
                            <CardContent key={i}>
                             <SearchResults name={trail.trail_name} location={trail.location} length={trail.length} difficulty={trail.difficulty} history={this.props.history}/>
                            </CardContent>
                        )}
                        </Card>
            </div>
        
      );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Search);

