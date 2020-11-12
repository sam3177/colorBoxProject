import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorSet.css';
import Header from './Header';

class ColorSet extends Component {
	state = { colorType: 'hex' };
	
	changeType = (type) => {
		this.setState({ colorType: type });
	};
	render () {
      let { palette } = this.props;
      console.log(this.props)
		let colors = palette.map((color) => (
			<ColorBox
				key={color.name}
				toCopy={color[this.state.colorType]}
				background={color}
			/>
		));
		return (
			<div className="ColorSet">
				<Header
               palName={this.props.match.params.paletteName}
					type={this.state.colorType}
					changeType={this.changeType}
				/>
				<div className="ColorSet-colors">{colors}</div>
				<div className="ColorSet-footer">
					<p>{palette.paletteName}</p>
					<span>{palette.emoji}</span>
				</div>
			</div>
		);
	}
}

export default ColorSet;
