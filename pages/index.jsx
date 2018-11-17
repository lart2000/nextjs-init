import React, { Component } from 'react'
import './../src/sass/pages/index/index.sass'
import config from 'next/config';
import dynamic from 'next/dynamic';

import Svg_user from "./../static/man-user.svg";
const DynamicComponentWithNoSSR = dynamic(() => import('./holi'), {
	ssr: false,
	loading: ()=>(<p>cargando...</p>)
});
export default class index extends Component {
	static getInitialProps = async (ctx)=>{
		console.log("entro");
		return {
			name : "I am a props"	
		}
	}
	componentDidMount(){
	}
	render() {
		
		return (
			<React.Fragment>
				<header className="l-header">
					welcome to nextjs		
				</header> 
				<DynamicComponentWithNoSSR/>
				{this.props.name}
				<main className="l-main">
					return <Svg_user className="svg-user" />
					
				</main>
				<footer className="l-footer">
					<button onClick={this.handleClick}> holi </button>
				</footer>
			</React.Fragment>
	)
	}
	handleClick(){
		console.log(config());
	}
}
