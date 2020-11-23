import React, { Component } from 'react';
import DraggableColorBox from './DraggableColorBox';
import { withStyles } from '@material-ui/core/styles';

let styles = {
	root : {
      // backgroundColor : 'pink',
      height :'100%'
	}
};

class DraggableColorList extends Component {
	render () {
		let { colors, deleteColorBox, classes } = this.props;
		let newColors = colors.map((color) => (
			<DraggableColorBox
				key={color.name}
				deleteColor={deleteColorBox}
				color={color}
			/>
		));
		return <div className={classes.root}>{newColors}</div>;
	}
}

export default withStyles(styles)(DraggableColorList);
