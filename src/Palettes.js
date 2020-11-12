import React, { Component } from 'react';
import MicroPalette from './MicroPalette';
import { withStyles } from '@material-ui/styles';
// import './Palettes.css';

const styles = {
	root      : {
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		backgroundColor : 'blue',
		height          : '100vh'
	},
	container : {
		width         : '60%',
		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'flex-start',
		flexWrap      : 'wrap'
	},
	nav       : {
		padding        : '1rem',
		display        : 'flex',
		color          : 'white',
		justifyContent : 'space-between',
		'& h2'         : {
			margin : '0'
		}
	},
	palettes  : {
		width               : '100%',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%'
	}
};

class Palettes extends Component {
	getLink = (id) => {
		this.props.history.push(`/palette/${id}`);
	};
	render () {
		let { classes, SeedColors } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h2 className={classes.title}>React Colors</h2>
					</nav>
					<div className={classes.palettes}>
						{SeedColors.map((palette) => (
							<MicroPalette
								handleClick={() => this.getLink(palette.id)}
								key={palette.id}
								palette={palette}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Palettes);
