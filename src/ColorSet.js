import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import './ColorSet.css';

class ColorSet extends Component {
	state = { colorType: 'hex' };
	
	changeType = (type) => {
		this.setState({ colorType: type });
	};
	render () {
      let { palette, palInfo} = this.props;
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
				<Footer palette={palInfo}/>
            
			</div>
		);
	}
}

export default ColorSet;
