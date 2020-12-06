import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MicroPaletteStyles';

class MicroPalette extends PureComponent {
	handleDelBtn = (e) => {
		e.stopPropagation();
		this.props.openConfirm(this.props.palette);
	};
	handleClick = () => {
		this.props.getLink(this.props.palette.id);
	};
	render () {
		let { palette, classes } = this.props;
		let colorSet = palette.colors.map((color) => (
			<div
				key={color.name}
				className={classes.color}
				style={{ backgroundColor: color.color }}
			/>
		));

		return (
			<div onClick={this.handleClick} className={classes.root}>
				<span className={classes.deleteFloat} onClick={this.handleDelBtn}>
					<DeleteIcon />
				</span>
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
