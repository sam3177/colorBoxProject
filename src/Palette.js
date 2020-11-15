import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Header from './Header';
import Footer from './Footer';

class Palette extends Component {
	state = { level: 500, colorType: 'hex' };
	changeLevel = (level) => {
		this.setState({ level: level });
	};
	changeType = (type) => {
		this.setState({ colorType: type, snack: true });
	};
	render () {
		let { palette } = this.props;
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
			<div className="Palette">
				<Header
					level={this.state.level}
					changeLevel={this.changeLevel}
					type={this.state.colorType}
					changeType={this.changeType}
				/>
				<div className="Palette-colors">{colors}</div>
				<Footer palette={palette} />
			</div>
		);
	}
}

export default Palette;
