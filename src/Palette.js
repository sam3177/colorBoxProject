import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/PaletteStyles';

class Palette extends Component {
	state = { level: 500, colorType: 'hex' };
	changeLevel = (level) => {
		this.setState({ level: level });
	};
	changeType = (type) => {
		this.setState({ colorType: type, snack: true });
	};
	render () {
		let { palette, classes } = this.props;
		let colors = palette.colors[this.state.level].map((color) => (
			<ColorBox
				key={color.id}
				toCopy={color[this.state.colorType]}
				background={color}
				palName={palette.id}
				link={true}
			/>
		));
		return (
			<div className={classes.palette}>
				<Header
					level={this.state.level}
					changeLevel={this.changeLevel}
					type={this.state.colorType}
					changeType={this.changeType}
				/>
				<div className={classes.colors}>{colors}</div>
				<Footer palette={palette} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
