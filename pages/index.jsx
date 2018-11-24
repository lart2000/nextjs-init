import React, { Component } from 'react'
import './../src/sass/pages/index/index.sass'
import Svg_user from "./../static/man-user.svg";
import NoSSR from '../src/components/no-ssr/index';
import Button from '@material-ui/core/Button';
export default class index extends Component {
	static getInitialProps = async (ctx)=>{
		console.log("entro");
		return {
			name : "I am a props"	
		}
	}
	constructor(props){
		super(props);
		// this.main = React.createRef();
	
	}
	componentDidMount(){
	}
	render() {
		
		return (
			<React.Fragment>
				<header className="l-header l-markup" ref={ref=>{this.header=ref}}>
					welcome to nextjs		
					
				</header> 
				{/* <DynamicComponentWithNoSSR/> */}
				{/* {this.props.name} */}
				<main className="l-main" >
					<Svg_user className="svg-user" />
					<div >primer ref</div>
					<div ref={(ref)=>{this.second=ref}}>segundo ref</div>
				</main>
				
				<NoSSR loading={getLoading()}>
					<Name></Name>
				</NoSSR>{
					getLoading()
				}
			 
				<NoSSR>
					asdas
				</NoSSR>
				{/* <Button variant="contained" color="primary">
					Primary
				</Button> */}
				<footer className="l-footer">
					<button onClick={this.handleClick}> holi </button>
				</footer>
			</React.Fragment>
	)
	}
	handleClick=()=>{
		console.log(this.main);
		// document.querySelector("").textContent;
		// this.main.current.textContent="holi, estas dentro";
		this.second.innerHTML="holi , esta dentro dela segundo ref";
		// console.log1(config());
	}
}

function Name(){
	console.log("Holi");
	
	return <div>
		Luis Alberto
	</div>
}
function getLoading(){
	return <div className="c-loading">
		
	</div>
}
