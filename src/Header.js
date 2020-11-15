import React, { Component } from 'react';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import './Header.css';

const styles = {
	header : {
		height         : '10vh',
		maxHeight      : '50px',
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		'& h3'         : {
			color   : 'black',
			display : 'inline-block',
			margin  : '0'
		}
	},
	links  : {
		display    : 'flex',
		alignItems : 'center'
	},
	title  : {
		backgroundColor : 'rgba(194, 194, 194, 0.74)',
		height          : '100%',
		padding         : '15px',
		width           : 'fit-content',
		display         : 'flex',
		alignItems      : 'center'
	},
	back   : {
		marginLeft : '10px'
	},
	level  : {
		width  : '120px',
		margin : '0 15px'
	},
	slider : {
		width   : '30%',
		display : 'inline-block'
	},
	select : {
		display        : 'flex',
		justifyContent : 'flex-end',
		width          : '30%',
		height         : '100%'
	}
	// .rc-slider-handle,
	// .rc-slider-handle:hover,
	// .rc-slider-handle:active,
	// .rc-slider-handle:focus {
	// 	background-color: 'lime',
	// 	border:'none',
	// 	outline: 'none',
	// 	width:'15px',
	// 	height:'15px',
	// 	/* margin-top: 2px; */
	// }
	// .rc-slider-track{
	// 	background-color: 'transparent',
	// }
	// .rc-slider-rail{
	// 	height: '5px',
	// }
	// .MuiInputBase-root.MuiInput-root.MuiInput-underline{
	// 	margin-right: '10px',;
	// }
};

class Header extends Component {
	state = { type: 'hex', open: false };
	handleLevelChange = (level) => {
		this.props.changeLevel(level);
		console.log(this.state);
	};
	handleTypeChange = (e) => {
		this.setState({ type: e.target.value, open: true }, () => {
			this.props.changeType(this.state.type);
			console.log(this.state);
		});
		setTimeout(() => {
			this.setState({ open: false });
		}, 2000);
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	render () {
		let { classes } = this.props;
		return (
			<nav className={classes.header}>
				<div className={classes.links}>
					<div className={classes.title}>
						<Link to="/">
							<h3>react color picker</h3>
						</Link>
					</div>
					{!this.props.level && (
						<div className={classes.back}>
							<Link to={`/palette/${this.props.palName}`}>
								<h3>BACK</h3>
							</Link>
						</div>
					)}
				</div>
				{this.props.level && (
					<div className={classes.level}>{`LEVEL: ${this.props.level}`}</div>
				)}
				{this.props.level && (
					<Slider
						className={classes.slider}
						defaultValue={this.props.level}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.handleLevelChange}
					/>
				)}
				<div className={classes.select}>
					<Select value={this.state.type} onChange={this.handleTypeChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(200,200,200)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical   : 'bottom',
						horizontal : 'left'
					}}
					open={this.state.open}
					autoHideDuration={4000}
					// onClose={this.handleClose}
					message={<span id="message-id">Format changed!</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					action={[
						<IconButton
							size="small"
							aria-label="close"
							key="close"
							color="inherit"
							onClick={this.handleClose}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default withStyles(styles)(Header);
