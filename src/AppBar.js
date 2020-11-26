import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NewPaletteFormStyles';

class AppNavBar extends Component {
	state = { showPopup: false, paletteName: '' };
	componentDidMount() {
		ValidatorForm.addValidationRule('isUniquePaletteName', () =>
			this.props.seed.every(
				(palette) =>
					this.state.paletteName.toLowerCase() !==
					palette.paletteName.toLowerCase()
			)
		);
	}
	changePaletteName = (e) => {
		this.setState({ paletteName: e.target.value });
	};
	addNewPalette = () => {
		this.props.addNewPalette(this.state.paletteName);
	};
	render () {
		let { open, classes, handleDrawerOpen } = this.props;
		let { showPopup, paletteName } = this.state;
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
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" noWrap>
						New Palette Form
					</Typography>
				</Toolbar>
				<div className={classes.navBtnContainer}>
					<Link to="/">
						<Button variant="contained">GO BACK</Button>
					</Link>
					<Button
						onClick={() => this.setState({ showPopup: true })}
						variant="contained"
					>
						SAVE PALETTE
					</Button>
				</div>
				<div
					className={classNames(classes.savePalettePopup, {
						[classes.showPopup]: showPopup
					})}
				>
					<ValidatorForm
						className={classes.validatorPaletteForm}
						onSubmit={this.addNewPalette}
					>
						<Typography variant="h5">Add a Palette Name</Typography>
						<TextValidator
							className={classes.textValidator}
							label="Palette Name"
							onChange={this.changePaletteName}
							value={paletteName}
							validators={[ 'required', 'isUniquePaletteName' ]}
							errorMessages={[
								'This field is required',
								'Palette Name already in use'
							]}
						/>
						<Button
							type="submit"
							// onClick={this.addNewColor}
							className={classes.paletteSubmit}
							variant="contained"
						>
							ADD PALETTE
						</Button>
					</ValidatorForm>
				</div>
			</AppBar>
		);
	}
}

export default withStyles(styles)(AppNavBar);
