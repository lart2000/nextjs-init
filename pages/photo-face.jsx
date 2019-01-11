import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar, Paper, Select } from '@material-ui/core';
import './../src/sass/pages/photo-face.sass';
const styles = {
	card: {
		marginTop : 40,
		maxWidth: 345,
  },
  media: {
	  height: 140,
	},
	avatar: {
		height: 140,
		width: 140,
		margin: "0px auto"
	},
};

function MediaCard(props) {
  const { classes } = props;
  return (
	  <Paper  elevation={5} className="p-photo-container" >
	  <Grid container justify="center">
		<Card className={classes.card}>
		<CardActionArea disableRipple >
			<CardMedia
			className={classes.media}
			image="/static/images/cards/contemplative-reptile.jpg"
			title="Contemplative Reptile"
			>
				<Avatar children="go" className={classes.avatar}  />
			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Lizard
				</Typography>
				<Typography component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Button size="small" color="primary">
			Share
			</Button>
			<Button size="small" color="primary">
				Learn More
			</Button>
		</CardActions>
		</Card>
	  </Grid>
	</	Paper>
	
  );
}

MediaCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);