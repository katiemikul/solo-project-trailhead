import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import FavoriteButton from '../FavoriteButton/FavoriteButton';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

// function postFavorites() {
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

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.trailInfo.image_path}
          title="hiking trail"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Trail Name: {props.trailInfo.trail_name}
          </Typography>
          <Typography component="p">
          Location: {props.trailInfo.location}
          </Typography>
          <Typography component="p">
          Length in miles: {props.trailInfo.length}
          </Typography>
          <Typography component="p">
          Difficulty: {props.trailInfo.difficulty}
          </Typography>
          <Typography component="p">
          Elevation High: {props.trailInfo.high}
          </Typography>
          <Typography component="p">
          Elevation Low: {props.trailInfo.low}
          </Typography>
          <Typography component="p">
          Longitude: {props.trailInfo.longitude}
          </Typography>
          <Typography component="p">
          Latitude: {props.trailInfo.latitude}
          </Typography>
          <Typography component="p">
          Trail Condition: {props.trailInfo.condition_status}
          </Typography>
          <Typography component="p">
          Trail Condition Details: {props.trailInfo.condition_details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
          <FavoriteButton />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);