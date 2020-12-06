import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DraggableColorBoxStyles';

class DraggableColorBox extends Component {
	deleteColorBox = () => {
		this.props.deleteColor(this.props.color);
	};
	render () {
		let { color, classes } = this.props;
		return (
			<div
				className={classes.colorBox}
				style={{
					backgroundColor : color.color
				}}
			>
				<div className={classes.content}>
					<span>{color.name}</span>

					<DeleteIcon
						onClick={this.deleteColorBox}
						className={classes.deleteColorBox}
					/>
				</div>
			</div>
		);
	}
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
