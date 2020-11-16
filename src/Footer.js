import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles'

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
