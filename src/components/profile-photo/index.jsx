import React from 'react';

export function Knight ({black}) {
	let fill = black ? "black":"white"
	return <div className={`c-horse c-horse--${fill}`}>♘</div>;
}

export function  Square ({changePosition,black,children,position}) {

	const fill = black ? 'black' : 'white';
	return <div  className = {`c-square c-square--${fill}`}
					onClick   = {()=>{changePosition(position)}}>
		{
			children
		}
	</div>;
}
