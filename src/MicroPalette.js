import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MicroPaletteStyles';

class MicroPalette extends Component {
	handleDelete = (e) => {
		e.stopPropagation();
		this.props.deletePalette(this.props.palette);
	};
	render () {
		let { palette, classes, handleClick } = this.props;
		let colorSet = palette.colors.map((color) => (
			<div
				key={color.name}
				className={classes.color}
				style={{ backgroundColor: color.color }}
			/>
		));

		return (
			<div onClick={handleClick} className={classes.root}>
				<span className={classes.deleteFloat} onClick={this.handleDelete}>
					<DeleteIcon />
				</span>
				{/* <div className={classes.content} onClick={handleClick} > */}

				<div className={classes.colors}>{colorSet}</div>
				<p className={classes.title}>
					{palette.paletteName}
					<span className={classes.emoji}>{palette.emoji}</span>
				</p>
			</div>
			// </div>
		);
	}
}

export default withStyles(styles)(MicroPalette);
