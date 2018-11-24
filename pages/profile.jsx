import React, { Component } from 'react'
import Index from '../src/components/profile-photo/index';
import { Knight } from '../src/components/profile-photo';
import { Square } from '../src/components/profile-photo';
import './../src/components/profile-photo/index.sass';
function fillBoard(){
	return "";
}
class  Board extends Component {
	state = {
		position: [1,1]
	}
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.setState({
			position : this.props.position
		});
	}
	changePosition= (position)=>{
		const before = this.state.position;
		const after  = position;
		let spaceY = Math.abs(after[0]-before[0]);
		let spaceX = Math.abs(after[1]-before[1]);
		if((spaceX==1&&spaceY==2)||(spaceX==2&&spaceY==1)){
			this.setState({position});
		}else{
			console.log("error")
		}
	}
	render(){
		const {children} = this.props
		const {position}  = this.state
		return (
			<div className="c-board">
				{
					this.fillBoard(Square,position)
				}
			</div>
		);
	}
	fillBoard=(Square,position)=>{
		const array = [];
		for (let i = 1; i <=8; i++) {
			for (let j = 1; j <=8; j++) {
				// i es impar 
				// entonces j 
				// sino j = j+1 
				//j es impar negro
				let isBlack = ((i%2===0?0:1)+(j%2===0?0:1))%2==0?1:0;
				let props = {
					black         : isBlack,
					position      : [i,j],
					changePosition: this.changePosition,
					key           : i+""+j
				}
				if (position[0]==i && position[1]==j) {
					array.push(<Square {...props}>
								<Knight black={!isBlack}/>
							</Square>)
				}
				else{
					array.push(<Square {...props}/>)
				}

			}
		}
		return array;
	}
}
export default class Profile extends Component {
	
	render() {
		return (
			<Board position={[1,1]}>
			</Board>
		)
  }
}
