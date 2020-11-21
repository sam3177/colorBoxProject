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
		open      : true,
		color     : 'green',
		colors    : seed[0].colors,
		colorName : ''
	};
	componentDidMount () {
		ValidatorForm.addValidationRule('isUniqueColorName', (value) =>
			this.state.colors.every(
				(color) => value.toLowerCase() !== color.name.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isUniqueColor', () =>
			this.state.colors.every((color) => this.state.color.toLowerCase() !== color.color.toLowerCase())
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
		console.log(color);
	};
	clearPalette = () => {
		this.setState({ colors: [] });
	};
	handleSubmit = (e) => {
		this.setState((st) => ({
			colors    : [
				...st.colors,
				{ name: this.state.colorName, color: this.state.color }
			],
			colorName : ''
		}));
	};
	handleChange = (e) => {
		this.setState({ colorName: e.target.value });
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
	render () {
		const { classes } = this.props;
		const { open, color, colors, colorName } = this.state;
		let newColors = colors.map((color) => (
			<DraggableColorBox key={color.name} color={color} />
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
				>
					<Toolbar disableGutters={!open}>
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
						<div className={classes.btnContainer}>
							<Button onClick={this.clearPalette} variant="contained">
								CLEAR PALETTE
							</Button>
							<Button onClick={this.getRandomColor} variant="contained">
								RANDOM COLOR
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
							onSubmit={this.handleSubmit}
						>
							<TextValidator
								className={classes.textValidator}
								label="Color Name"
								onChange={this.handleChange}
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
								onClick={this.addColor}
								className={classes.submit}
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
