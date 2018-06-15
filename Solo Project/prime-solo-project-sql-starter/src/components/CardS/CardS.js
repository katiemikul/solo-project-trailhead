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

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <CardMedia
          image={props.image_path}
          src={props.image_path}
          title="hiking trail"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Trail Name: {props.name}
          </Typography>
          <Typography component="p">
          Location: {props.location}
          </Typography>
          <Typography component="p">
          Length in miles: {props.length}
          </Typography>
          <Typography component="p">
          Difficulty: {props.difficulty}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={props.handleSubmit} value={props.name} id="trail" variant="raised">
            View Trail Details
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