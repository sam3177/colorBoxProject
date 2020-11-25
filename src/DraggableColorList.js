import React, { Component } from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';

let styles = {
	root : {
		// backgroundColor : 'pink',
      height : '99%',
      width : '100%', 
      margin:'0 auto',
      overFlow:'hidden',
      marginTop:'5px'
	}
};

class DraggableColorList extends Component {
	render () {
		let { colors, deleteColorBox, classes } = this.props;
		let newColors = colors.map((color, i) => (
			<DraggableColorBox
            key={color.name}
            index={i}
				deleteColor={deleteColorBox}
				color={color}
			/>
		));
		return <div className={classes.root}>{newColors}</div>;
	}
}

export default SortableContainer(withStyles(styles)(DraggableColorList));
