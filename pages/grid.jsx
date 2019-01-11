import React, { Component, Fragment } from 'react'
import './../src/grid.sass';
import { Card } from '@material-ui/core';
function decorator(target) {
	// return class extends target{
	// 	render(){
	// 		return <div>hola</div>
	// 	}
	// }
}
@decorator
export default class Grid extends Component {
	state = {
		user_name: "luis",
		array: [1]
	}
	render() {
		return (
			<Fragment>

				<label htmlFor="">
					<input type="text" onChange={this.onChange} name="user_name" value={this.state.user_name} />
				</label>
				<label htmlFor="">
					<input type="text" onChange={this.onChange} name="array" value={this.state.array} />
				</label>
				<Name {...this.state}></Name>
				<div className="container-grid">
					<div className="aside">
						<img className="img" src="https://www.w3schools.com/w3css/img_lights.jpg" alt=""/>

					</div>
					<div className="main">
						main
				</div>
					<div className="footer">
						footer
				</div>
					<div className="header">
						header
				</div>
				</div>
			</Fragment>
		)
	}
	onChange = (e) => {
		let value = e.target.value;
		let key = e.target.name;
		if (key === 'array') {

			this.setState({ array: [...this.state.array, value] });
		}

		else this.setState({ [key]: value })

	}

}


class Name extends React.PureComponent {

	state = {
	}
	// static getDerivedStateFromProps(nextProps, prevState) {
	//   return {
	// 	  user_name : nextProps.user_name
	//   }
	// }
	componentDidMount() {
		this.setState({ user_name: this.props.user_name })

	}
	render() {
		return <Card>
			{
				"soy el state" + this.state.user_name
			}
			<br />
			<span>
				{
					"soy el props" + this.props.user_name
				}
			</span>
			<br />
			<span>
				{
					"soy el array : " + this.props.array
				}
			</span>
		</Card>
	}
}