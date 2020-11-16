import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MicroPaletteStyles';

class MicroPalette extends Component {
	render () {
		let { palette, classes, handleClick } = this.props;
		let colorSet = palette.colors.map((color) => (
			<div
				key={color.name}
				className={classes.color}
				style={{ backgroundColor: color.color }}
			/>
		));
		console.log(colorSet);
		return (
			<div onClick={handleClick} className={classes.root}>
				<div className={classes.colors}>{colorSet}</div>
				<p className={classes.title}>
					{palette.paletteName}
					<span className={classes.emoji}>{palette.emoji}</span>
				</p>
			</div>
		);
	}
}

export default withStyles(styles)(MicroPalette);
