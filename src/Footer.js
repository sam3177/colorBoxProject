import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

let styles = {
	root : {
		width          : '100%',
		height         : '5vh',
		display        : 'flex',
		justifyContent : 'flex-end',
		alignItems     : 'center',
		'& span'       : {
			margin : '0 20px'
		}
	}
};
class Footer extends Component {
	render () {
		let { palette, classes } = this.props;
		return (
			<div className={classes.root}>
				<p>{palette.paletteName}</p>
				<span>{palette.emoji}</span>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
