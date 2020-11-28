import React, { Component } from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/DraggableColorListStyles'

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
