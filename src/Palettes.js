import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import MicroPalette from './MicroPalette';
import styles from './styles/PalettesStyles';

class Palettes extends Component {
	state = { openConfirm: false, palToDelete: '' };
	handleOpen = (pal) => {
		this.setState({ openConfirm: true, palToDelete: pal });
	};
	handleClose = () => {
		this.setState({ openConfirm: false, palToDelete: '' });
	};
	handleDelete = () => {
		this.props.deletePalette(this.state.palToDelete);
		this.setState({ openConfirm: false });
	};
	getLink = (id) => {
		this.props.history.push(`/palette/${id}`);
	};
	render () {
		let { classes, SeedColors } = this.props;
		let { openConfirm } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h2 className={classes.title}>React Colors</h2>
						<Link to="/palette/new">New Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{SeedColors.map((palette) => (
							<CSSTransition key={palette.id} timeout={500} classNames="item">
								<MicroPalette
									getLink={this.getLink}
									openConfirm={this.handleOpen}
									palette={palette}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog
					open={openConfirm}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Delete the palette?</DialogTitle>
					<List className={classes.list}>
						<ListItem
							className={classes.listIitem}
							button
							onClick={this.handleDelete}
						>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: green[100], color: green[800] }}
									className={classes.avatar}
								>
									<DeleteIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="DELETE" />
						</ListItem>
						<ListItem
							className={classes.listIitem}
							button
							onClick={this.handleClose}
						>
							<ListItemAvatar>
								<Avatar
									style={{ backgroundColor: red[100], color: red[800] }}
									className={classes.avatar}
								>
									<CancelIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="CANCEL" />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(Palettes);
