import { Component } from 'react';

import ReactDOM from 'react-dom';
export default class holi extends Component {
	constructor(props){
		super(props);
		this.el = document.createElement("div");
	}
	componentDidMount(){
		this.toPortal = document.querySelector(".l-header");
		
		this.toPortal.appendChild(this.el);
	}
	componentWillUnmount(){
		this.toPortal.removeChild(this.el);
	}
	render() {
		return  (
			ReactDOM.createPortal(this.props.children,this.el)
		);
		
	}
}