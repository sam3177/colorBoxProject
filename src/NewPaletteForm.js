import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from './styles/NewPaletteFormStyles';
import DraggableColorBox from './DraggableColorBox';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import seed from './SeedColors';

class NewPaletteForm extends Component {
	state = {
		open        : true,
		color       : 'green',
		colors      : seed[0].colors,
		colorName   : '',
		paletteName : '',
		showPopup   : false
	};
	componentDidMount () {
		ValidatorForm.addValidationRule('isUniqueColorName', (value) =>
			this.state.colors.every(
				(color) => value.toLowerCase() !== color.name.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isUniqueColor', () =>
			this.state.colors.every(
				(color) => this.state.color.toLowerCase() !== color.color.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isUniquePaletteName', () =>
			this.props.seed.every(
				(palette) =>
					this.state.paletteName.toLowerCase() !==
					palette.paletteName.toLowerCase()
			)
		);
	}
	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	colorChange = (color) => {
		this.setState({ color: color.hex });
		// console.log(color);
	};
	clearPalette = () => {
		this.setState({ colors: [] });
	};
	addNewColor = (e) => {
		this.setState((st) => ({
			colors    : [
				...st.colors,
				{ name: this.state.colorName, color: this.state.color }
			],
			colorName : ''
		}));
	};
	changeColorName = (e) => {
		this.setState({ colorName: e.target.value });
	};
	changePaletteName = (e) => {
		this.setState({ paletteName: e.target.value });
	};
	getRandomColor = () => {
		let idx = Math.floor(Math.random() * seed[0].colors.length);
		if (this.state.colors.length < 20) {
			this.setState((st) => ({
				colors : [
					...st.colors,
					{ name: seed[0].colors[idx].name, color: seed[0].colors[idx].color }
				]
			}));
		}
	};
	addNewPalette = () => {
		let newPalette = {
			paletteName : this.state.paletteName,
			id          : this.state.paletteName.toLowerCase().replace(/ /g, '-'),
			emoji       : '🎨',
			colors      : this.state.colors
		};
		this.props.addPalette(newPalette);
		this.props.history.goBack();
	};
	deleteColorBox = (selColor) => {
		let newColors = this.state.colors.filter(color => color !== selColor);
		this.setState({ colors: newColors });
	}
	render () {
		const { classes } = this.props;
		const {
			open,
			color,
			colors,
			colorName,
			paletteName,
			showPopup
		} = this.state;
		let newColors = colors.map((color) => (
			<DraggableColorBox key={color.name}
			deleteColor = {this.deleteColorBox}
			color={color} />
		));
		let palSize = colors.length < 20;
		return (
			<div className={classes.root}>
				<CssBaseline />
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
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							New Palette Form
						</Typography>
					</Toolbar>
					<div className={classes.navBtnContainer}>
						<Button
							onClick={() => this.props.history.goBack()}
							variant="contained"
						>
							GO BACK
						</Button>
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
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper : classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.drawerContent}>
						<Typography variant="h5">Design Your Palette</Typography>
						<div className={classes.drawerBtnContainer}>
							<Button onClick={this.clearPalette} variant="contained">
								CLEAR PALETTE
							</Button>
							<Button
								disabled={!palSize}
								onClick={this.getRandomColor}
								variant="contained"
							>
								{
									palSize ? 'RANDOM COLOR' :
									'FULL PALETTE'}
							</Button>
						</div>
						<ChromePicker
							className={classes.ChromePicker}
							color={color}
							onChange={this.colorChange}
							onChangeComplete={this.colorChange}
						/>
						<ValidatorForm
							className={classes.validatorForm}
							onSubmit={this.addNewColor}
						>
							<TextValidator
								className={classes.textValidator}
								label="Color Name"
								onChange={this.changeColorName}
								value={colorName}
								validators={[
									'required',
									'isUniqueColor',
									'isUniqueColorName'
								]}
								errorMessages={[
									'This field is required',
									'Color already in use',
									'Color Name already in use'
								]}
							/>
							<Button
								type="submit"
								style={{ backgroundColor: color }}
								// onClick={this.addColor}
								className={classes.colorSubmit}
								variant="contained"
								disabled={!palSize}
							>
								{
									palSize ? 'ADD COLOR' :
									'FULL PALETTE'}
							</Button>
						</ValidatorForm>
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					{newColors}
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
