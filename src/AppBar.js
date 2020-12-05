import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MetaFormDialog from './MetaFormDialog';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/AppBarStyles';

class AppNavBar extends Component {
	render () {
		let { open, classes, handleDrawerOpen, seed, addNewPalette } = this.props;
		return (
			<AppBar
				position="fixed"
				className={classNames(classes.appBar, {
					[classes.appBarShift]: open
				})}
				color="default"
			>
				<Toolbar className={classes.toolbar} disableGutters={!open}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						className={classNames(classes.menuButton, open && classes.hide)}
					>
						<ChevronRightIcon />
					</IconButton>
					<Typography
						className={classes.title}
						variant="h6"
						color="inherit"
						noWrap
					>
						New Palette Form
					</Typography>
				</Toolbar>
				<div className={classes.navBtnContainer}>
					<Link to="/">
						<Button variant="contained">BACK</Button>
					</Link>
					<MetaFormDialog seed={seed} addNewPalette={addNewPalette} />
				</div>
			</AppBar>
		);
	}
}

export default withStyles(styles, { withTheme: true })(AppNavBar);
