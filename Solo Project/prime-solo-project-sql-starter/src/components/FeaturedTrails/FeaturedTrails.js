import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
          style={{height: "250px"}}
          image="trailpics/trail1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Sunshine Lion's Liar Loop
          </Typography>
          <Typography component="p">
          This enjoyable loop sees less traffic than the main attraction in this area, the Mount Sanitas Loop. The other advantages of this loop include a less arduous ascent on a shiny new trail and a quick, efficient descent.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See Trail Details
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className={classes.card}>
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/pawnee.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Pawnee-Buchanan Loop
          </Typography>
          <Typography component="p">
          This is an easily accessed world class 27 mile loop, leading through some absolutely stunning terrain. The closest comparison to this route is the four pass loop around Maroon Bells. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See Trail Details
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card className={classes.card}>
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/hell.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Hell Canyon Loop
          </Typography>
          <Typography component="p">
          This is a challenging hike that's jam-packed with everything; peaks, lakes, long off-trail sections, and great photo opportunities throughout. Complete it as a full day-hike or take some time and enjoy camping along the way. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See Trail Details
          </Button>
          <Button size="small" color="primary">
            Save
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