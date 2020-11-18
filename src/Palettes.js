import React, { Component } from 'react';
import MicroPalette from './MicroPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PalettesStyles';

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
						<Link to="/palette/new">New Palette</Link>
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
