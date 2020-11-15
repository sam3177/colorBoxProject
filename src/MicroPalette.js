import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
// import './MicroPalette.css';

const styles = {
	link   : {
		textDecoration : 'none'
	},
	root   : {
		backgroundColor : 'white',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		textDecoration  : 'none',
		color           : 'black',
		fontWeight      : '600',
		display         : 'flex',
		flexDirection   : 'column',
      justifyContent  : 'flex-end',
      cursor: 'pointer'
      
	},
	colors : {
		display    : 'flex',
		flexWrap   : 'wrap',
		backgroundColor : 'grey',
		width           : '95%',
		height          : '9vh',
		borderRadius    : '5px',
		overFlow        : 'hidden',
		// border       : '1px solid black',
      margin          : '0 auto'
      
		// '& .color' : {
		// 	width  : '20%',
		// 	height : '20px'
		// },
		// '& .color:nth-of-type(1)' : {
		//    borderRadius : '5px 0 0 0'
		// },
		// '& .color:nth-of-type(5)':{
		//    borderRadius : '0 5px 0 0'
		// },
		// '& .color:nth-of-type(16)':{
		//    borderRadius : '0 0 0 5px'
		// },
		// '& .color:nth-of-type(20)':{
		//    borderRadius : '0 0 5px 0'
		// }
   },
   
	color  : {
		width        : '20%',
		height       : '25%',
		display      : 'inline-block',
		// margin       : '0 auto',
		position     : 'relative',
		// marginBottom : '-3px'
	},

	title  : {
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		margin         : '5px'
	}
};

class MicroPalette extends Component {
	render () {
		let { palette, classes, handleClick } = this.props;
		let colorSet = palette.colors.map((color) => (
			<div
				key={color.name}
				className={classes.color}
				style={{ backgroundColor: color.color }}
			/>
		));
		console.log(colorSet);
		return (
			<div onClick={handleClick} className={classes.root}>
				<div className={classes.colors}>{colorSet}</div>
				<p className={classes.title}>
					{palette.paletteName}
					<span className={classes.emoji}>{palette.emoji}</span>
				</p>
			</div>
		);
	}
}

export default withStyles(styles)(MicroPalette);
