import React, { Component } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import AppNavBar from './AppBar';
import DraggableColorList from './DraggableColorList';
import ColorPickerForm from './ColorPickerForm';
import SeedColors from './SeedColors';
import styles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
	state = {
		open   : true,
		colors : this.props.seed[0].colors
	};
	handleDrawerOpen = () => {
		this.setState({ open: true });
		
	};
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	clearPalette = () => {
		this.setState({ colors: [] });
	};
	addNewColor = (colorObj) => {
		this.setState((st) => ({
			colors    : [ ...st.colors, colorObj ],
			colorName : ''
		}));
	};
	getRandomColor = () => {
		let allColors = SeedColors.map((palette) => palette.colors).flat();
		let idx = Math.floor(Math.random() * allColors.length);
		const pickedColor = allColors[idx];
		// console.log(!this.state.colors.includes(pickedColor));
		// console.log(allColors)
		// console.log(pickedColor)
		// console.log(this.state.colors)
		if (!this.state.colors.includes(pickedColor)) {
			this.setState({
				colors : [ ...this.state.colors, pickedColor ]
			});
		}
		else {
			this.getRandomColor();
		}
	};

	addNewPalette = ({ palName, emoji }) => {
		let newPalette = {
			paletteName : palName,
			id          : palName.toLowerCase().replace(/ /g, '-'),
			emoji       : emoji,
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
		const { classes, seed } = this.props;
		const { open, colors } = this.state;
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
								onClick={this.getRandomColor}
								variant="contained"
								disabled={!palSize}
							>
								{
									palSize ? 'RANDOM COLOR' :
									'FULL PALETTE'}
							</Button>
						</div>
						<ColorPickerForm colors={colors} addNewColor={this.addNewColor} />
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<DraggableColorList
						axis="xy"
						distance={20}
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
