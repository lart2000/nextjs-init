import React, { Component } from 'react'
import Svg_user from "./../static/man-user.svg";
import NoSSR from '../src/components/no-ssr/index';
export default class index extends Component {
	static getInitialProps = async (ctx)=>{
		console.log("entro");
		return {
			name : "I am a props"	
		}
	}
	constructor(props){
		super(props);
	}
	render() {	
		return (
			<React.Fragment>
				<header className="l-header l-markup" ref={ref=>{this.header=ref}}>
					welcome to nextjs
					
				</header> 
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
				<footer className="l-footer">
					<button onClick={this.handleClick}> holi </button>
				</footer>
			</React.Fragment>
	)
	}
	handleClick=()=>{
		console.log(this.main);
		this.second.innerHTML="holi , esta dentro dela segundo ref";
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
