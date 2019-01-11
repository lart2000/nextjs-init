import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { dispatchToProps } from '../../redux/decorators';
import { WithStyles } from "@material-ui/core";
const styles = {
	card: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
};
export interface IProduct {
	id         : number,
	title      : string,
	description: string
}

export interface IProps extends WithStyles<typeof styles>{
	addCar  : (product: IProduct) => any,
	product : IProduct,
	classes : any
}
@dispatchToProps({
	addCar: (product: IProduct) => {
		return {
			type   : "ADD_CAR",
			product: {
				id         : product.id,
				title      : product.title,
				description: product.description
			}
		}
	}
})
class MediaCard extends React.Component<IProps> {
	
	constructor(props: IProps) {
		super(props); 
	}
	render() {
		const { addCar, product, classes } = this.props;
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
					<Button size="small" color="primary" onClick={() => { addCar(product) }}>
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
}

export default withStyles(styles)(MediaCard);
