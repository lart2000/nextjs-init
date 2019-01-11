import React, { Component } from 'react'
import { mapToProps, dispatchToProps } from '../redux/decorators';
import { delete_item, add_item, update_item } from '../redux/actionsCreators';
import './../src/demo-redux.sass'
import { Paper } from '@material-ui/core';

export default class Demo extends Component {
	render() {
		return (
			<div>
				<Register />
				<List />
			</div>
		)
	}
}
@dispatchToProps({
	add_item,
})
class Register extends React.Component {
	state = {
		name: "",
		id : 0,
	}
	static id=0
	render() {
		let { name, id } = this.state;
		return (
			<form action="javascript:void(0);" className="register" onSubmit={this.handleClick}>
				<input type="text" className="register__input" value={name} onChange={this.onChange} name="name" />
				<button className="register__button">
					Add
				</button>
			</form >
		)
	}
	handleClick=()=>{
		let { name, id } = this.state;
		let { add_item }   = this.props;
		add_item({ name, id })
		this.setState((state, props) => { 
			return { 
			name: "",
			id  : ++state.id
		 }})
		
	}
	onChange = (e) => {
		let key = e.target.name;
		let value = e.target.value;
		this.setState({
			[key]: value
		})
	}
}

@mapToProps((state) => ({
	list: state.list
}))

@dispatchToProps({
	add_item,
	update_item,
	delete_item,
})

class List extends React.Component {
    render() {
        const {list,delete_item} = this.props;
        return (
            <div className="list">
                {
                    (() => {
                        return list.map(el => (
                            <div className="list__item" key={el.id}>
                                <div className="list__item-name">
                                {el.name}
                                </div>
                                <div className="list__item-id">
                                {el.id}
                                </div>
                                <button className="list__action list__action--update">
                                    Update
                                </button>
                                <button className="list__action list__action--delete"
                                        onClick={()=>{delete_item(el)}}>
                                    Delete
                                </button>
                            </div>
                        ))
                    })()

                }
            </div>
        )
    }
}