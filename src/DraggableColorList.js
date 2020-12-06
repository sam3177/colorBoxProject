import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DraggableColorBox from './DraggableColorBox';
import styles from './styles/DraggableColorListStyles';

class DraggableColorList extends Component {
	render () {
		let { colors, deleteColorBox, classes } = this.props;
		let newColors = colors.map((color, i) => (
			<CSSTransition key={color.name} timeout={500} classNames="drgItem">
			<DraggableColorBox
				index={i}
				deleteColor={deleteColorBox}
				color={color}
			/>
			</CSSTransition>
		));
		return <TransitionGroup className={classes.root}>{newColors}</TransitionGroup>;
	}
}

export default SortableContainer(withStyles(styles)(DraggableColorList));
