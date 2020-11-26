import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppNavBar from './AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from './styles/NewPaletteFormStyles';
import DraggableColorList from './DraggableColorList';
import { ChromePicker } from 'react-color';
import { arrayMove } from 'react-sortable-hoc';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import seed from './SeedColors';

class NewPaletteForm extends Component {
	state = {
		open        : true,
		color       : 'green',
		colors      : seed[0].colors,
		colorName   : '',
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

	getRandomColor = () => {
		let allColors = seed.map((palette) => palette.colors).flat();
		let idx = Math.floor(Math.random() * allColors.length);
		console.log(allColors);
		console.log(idx);

		if (this.state.colors.length < 20) {
			const pickedColor = allColors[idx];
			console.log(pickedColor);

			if (!this.state.colors.includes(pickedColor)) {
				this.setState((st) => ({
					colors : [ ...st.colors, pickedColor ]
				}));
			}
		}
	};

	addNewPalette = (palName) => {
		let newPalette = {
			paletteName : palName,
			id          : palName.toLowerCase().replace(/ /g, '-'),
			emoji       : '🎨',
			colors      : this.state.colors
		};
		this.props.addPalette(newPalette);
		this.props.history.goBack();
	};
	deleteColorBox = (selColor) => {
		let newColors = this.state.colors.filter((color) => color !== selColor);
		this.setState({ colors: newColors });
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors : arrayMove(colors, oldIndex, newIndex)
		}));
	};
	render () {
		const { classes } = this.props;
		const {
			open,
			color,
			colors,
			colorName
		} = this.state;
		// let newColors = colors.map((color) => (
		// 	<DraggableColorBox key={color.name}
		// 	deleteColor = {this.deleteColorBox}
		// 	color={color} />
		// ));
		let palSize = colors.length < 20;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppNavBar
				seed={seed}
					open={open}
					addNewPalette={this.addNewPalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
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
					<DraggableColorList
						axis="xy"
						colors={colors}
						deleteColorBox={this.deleteColorBox}
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
