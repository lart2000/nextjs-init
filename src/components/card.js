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
import "./../sass/example.sass";
import { connect } from "react-redux";
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
	height: 140,
  },
};

function MediaCard ({addCar,product,classes}){	
	return (
	<Card className={classes.card}>
		<CardActionArea>
		<CardMedia
			className={classes.media}
			image="/static/images/cards/contemplative-reptile.jpg"
			title="Contemplative Reptile"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{product.title}
			</Typography>
			<Typography component="p">
			{product.description}
			</Typography>
		</CardContent>
		</CardActionArea>
		<CardActions>
		<Button  size="small" color="primary" onClick={()=>{addCar(product)}}>
			Add to car
		</Button>
		<Button size="small" color="primary">
			Learn More
		</Button>
		{
			<Typography className="title title--small"> 
				asdasdasdsa
			</Typography>
		}
		</CardActions>
	</Card>
	);
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapDispatchToProps= (dispatch)=>{
	return {
		addCar(product){
			dispatch({
				type   : "ADD_CAR",
				product: {
					id         : product.id,
					title      : product.title,
					description: product.description
				}
			});		
		}
	}
}
let StyleCard = withStyles(styles)(MediaCard);
export default connect(null,{
	addCar(product){
		return {
			type   : "ADD_CAR",
			product: {
				id         : product.id,
				title      : product.title,
				description: product.description
			}
		};		
	}
})(StyleCard);