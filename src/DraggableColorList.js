import React, { Component } from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './styles/DraggableColorListStyles';

class DraggableColorList extends Component {
	render () {
		let { colors, deleteColorBox, classes } = this.props;
		let newColors = colors.map((color, i) => (
			<CSSTransition key={color.name} timeout={500} classNames="item">
			<DraggableColorBox
				// key={color.name}
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
