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
    overflow: 'hidden',
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
        <h2>June's Featured Hikes:</h2>
      <Card className="card">
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/trail1.jpg"
          title="Sunshine Lions Liar Loop"
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
      <Card className="card">
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/pawnee.jpg"
          title="Pawnee Loop"
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
      <Card className="card">
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/hell.jpg"
          title="Hell Canyon"
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
<br/>
<Card className="card">
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/everest.jpg"
          title="Everest"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Everest Base Camp Trek
          </Typography>
          <Typography component="p">
          This unique trek starts with a spectacular flight from Kathmandu to Lukla, from where we take an unusual route through the heart of Sherpa country. This creates a much more interesting trek to the highest mountain in the world. The long, arduous trek culminates with an early morning ascent of Kala Pattar (18,188ft/5,545m), which overlooks the Base Camp and offers superb views of Everest, Lhotse, Nuptse, and Makalu.
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