
export default function  Square ({changePosition,black,children,position}) {

	let fill = black ? 'black' : 'white';
	return( 
	<div  className = {`c-square c-square--${fill}`}
				onClick   = {()=>{changePosition(position)}}>
		{
			children
		}
	</div>);
}