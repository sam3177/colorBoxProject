import React, { Component } from 'react';
import MicroPalette from './MicroPalette';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContent from '@material-ui/core/DialogContent';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';

import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PalettesStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Palettes extends Component {
	state = { openConfirm: false, palToDelete: {} };
	handleOpen = (pal) => {
		this.setState({ openConfirm: true, palToDelete: pal });
	};
	handleClose = () => {
		this.setState({ openConfirm: false });
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
									handleClick={() => this.getLink(palette.id)}
									// key={palette.id}
									openConfirm={this.handleOpen}
									palette={palette}
									// deletePalette={deletePalette}
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
					<DialogTitle id="form-dialog-title">
						Delete the pallete?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar className={classes.avatar}>
									<DeleteIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="DELETE" />
						</ListItem>
						<ListItem button onClick={this.handleClose}>
							<ListItemAvatar>
								<Avatar className={classes.avatar}>
									<CancelIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="CANCEL" />
						</ListItem>
					</List>
					{/* <DialogActions className={classes.dialogActions}>
						<Button
							onClick={this.handleClose}
							className={classes.button}
							variant="contained"
							// color="primary"
						>
							CANCEL
						</Button>
						<Button
							onClick={this.handleDelete}
							className={classes.button}
							variant="contained"
						>
							DELETE
						</Button>
					</DialogActions> */}
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(Palettes);
