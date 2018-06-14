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
    display: 'in-block',
    float: 'left',
    padding: '10px',
   margin: '10px',
   border: '2px solid #124751',
   height: 'auto',
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
        <h2 class='feature'>June's Featured Hikes:</h2>
      <Card className={classes.card}>
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/sunshinelion.jpg"
          title="Sunshine Lions Liar Loop"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Sunshine Lion's Liar Loop
          </Typography>
          <Typography component="p">
          This enjoyable loop sees less traffic than the main attraction in this area, the Mount Sanitas Loop. The other advantages of this loop include a less arduous ascent on a shiny new trail and a quick, efficient descent.
          </Typography>
          <br/>
          <Typography component="p">
          Boulder, Colorado
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" color="primary" className="trailsave" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/moraine.jpg"
          title="Moraine Lake"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Moraine Lake
          </Typography>
          <Typography component="p">
          Moraine Lake has the iridescent turquoise waters typical of glacier-fed lakes, due to the glacial silt suspended in the water. It is nestled in the Valley of Ten Peaks, ten rugged mountains that surround Moraine Lake.  
          </Typography>
          <br/>
          <Typography component="p">
          Banff National Park, Alberta, Canada
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trailsave" size="medium" color="primary" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
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
          <br/>
          <Typography component="p">
          Granby, Colorado
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trailsave" size="medium" color="primary" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
<Card className={classes.card}>
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
          <br/>
          <Typography component="p">
          Namche Bazar, Nepal
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trailsave" size="medium" color="primary" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          style={{height: "250px"}}
          image="trailpics/machu.jpg"
          title="Machu Picchu"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Machu Picchu
          </Typography>
          <Typography component="p">
          Machu Picchu is picture-postcard beautiful and steeped in history. Nestled high on a hilltop in the Andes, the ruins are extensive and complete enough to tell an interesting story to those who are fortunate enough to get there. There is a lot to learn about this iconic site, so engage a local guide or take a good guidebook so you don't miss some of the things that are special about this site. 
          </Typography>
          <br/>
          <Typography component="p">
          Santa Teresa, Peru
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trailsave" size="medium" color="primary" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
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
          <br/>
          <Typography component="p">
          Nederland, Colorado
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trailsave" size="medium" color="primary" variant="raised">
            Save
          </Button>
        </CardActions>
      </Card>
      <br />

    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);