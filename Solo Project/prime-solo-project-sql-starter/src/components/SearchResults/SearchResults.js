import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
            
            <Card className="card">
        <CardMedia
          className="card"
          image="trailpics/trail1.jpg"
          title="hiking trail"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Trail Name: {this.props.name}
          </Typography>
          <Typography component="p">
          Location: {this.props.location}
          </Typography>
          <Typography component="p">
          Length in miles: {this.props.length}
          </Typography>
          <Typography component="p">
          Difficulty: {this.props.difficulty}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleSubmit} value={this.props.name} id="trail" variant="raised">
            View Trail Details
          </Button>
        </CardActions>
      </Card>
        );
    }
}

// SimpleMediaCard.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SearchResults);