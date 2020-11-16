import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorSetStyles';

class ColorSet extends Component {
	state = { colorType: 'hex' };

	changeType = (type) => {
		this.setState({ colorType: type });
	};
	render () {
		let { palette, palInfo, classes } = this.props;
		console.log(this.props);
		let colors = palette.map((color) => (
			<ColorBox
				key={color.name}
				toCopy={color[this.state.colorType]}
				background={color}
			/>
		));
		return (
			<div className={classes.colorSet}>
				<Header
					palName={this.props.match.params.paletteName}
					type={this.state.colorType}
					changeType={this.changeType}
				/>
				<div className={classes.colors}>{colors}</div>
				<Footer palette={palInfo} />
			</div>
		);
	}
}

export default withStyles(styles)(ColorSet);
