import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DraggableColorBoxStyles';


class DraggableColorBox extends Component {
	render () {
		let { color, classes } = this.props;
		return (
			<div className={classes.colorBox}
				style={{
					backgroundColor : color.color
				}}
			>
				<p>{color.name}</p>
			</div>
		);
	}
}

export default withStyles(styles)(DraggableColorBox);
