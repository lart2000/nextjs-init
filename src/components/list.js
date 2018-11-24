import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});


function InteractiveList({classes,data,removeCar}){

    return (
      <div className={classes.root}>  
        <Grid container spacing={16}>
          <Grid item xs={12} >
            <Typography variant="h5" className={classes.title}>
              shopping  car
            </Typography>
            <div className={classes.demo}>
              <List>
                {
					(()=>{
						if(data!==null&&data.length){
							return data.map((el,index)=>(
								<LisItem item={el} key={index} removeCar={removeCar}></LisItem>
							));
						}else{
							return <Typography color="secondary">
								Lista vacia
							</Typography>
						}
					})()
					
				}
                
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
}
function  LisItem ({item,removeCar}){
		const {description,title} = item;
		return (
			<ListItem > 
				<ListItemAvatar>
					<Avatar>
						<FolderIcon />
					</Avatar>
				</ListItemAvatar>
				
				<ListItemText
				primary={title}
				secondary={
					<Typography noWrap={true}>
						{description}
					</Typography>
				}
				/>
				<ListItemSecondaryAction>
					<IconButton aria-label="Delete"  onClick={()=>{removeCar(item.id)}}>
						<DeleteIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
			)
}
InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired
};
let StyleInteractiveList=withStyles(styles)(InteractiveList);

const mapStateToProps= (state)=>({
	data : state.car
});
const mapDispatchToProps={
	removeCar:(id)=>(
		{
			type   : "REMOVE_CAR",
			product: {
				id
			}
		}
	)
};
export default connect(mapStateToProps,mapDispatchToProps)(StyleInteractiveList);
