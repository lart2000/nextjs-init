import React from 'react';
import { DragSource } from "react-dnd";
import { itemTypes } from './const';

const knightSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
	return {
	  connectDragSource: connect.dragSource(),
	  isDragging: monitor.isDragging()
	}
  }
function Knight ({black,connectDragSource, isDragging }) {
	let fill = black ? "black":"white"
	return connectDragSource(
		<div className={`c-horse c-horse--${fill}`}>♘</div>
		);
}
export default DragSource(itemTypes.KNIGHT,knightSource,collect)(Knight)


