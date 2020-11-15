import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
// import './ColorSet.css';

let styles = {
   colorSet: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // '& ColorBox': {
      //    width: '100%',
      //    height: '100%',
      // }
   },
   colors: {
      width: '100%',
      height: '89vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 33.3%)',
      gridGap: '0',
   }
   
}
class ColorSet extends Component {
	state = { colorType: 'hex' };
	
	changeType = (type) => {
		this.setState({ colorType: type });
	};
	render () {
      let { palette, palInfo, classes} = this.props;
      console.log(this.props)
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
				<Footer palette={palInfo}/>
            
			</div>
		);
	}
}

export default withStyles(styles)(ColorSet);
