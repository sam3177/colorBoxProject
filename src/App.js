import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import Palettes from './Palettes';
import ColorSet from './ColorSet';
import './App.css';
import { generatePalette } from './ColorHelper';

class App extends Component {
	render () {
		let getPalettes = (props) => {
			let name = props.match.params.paletteName;
			let selPalette = SeedColors.find((palette) => palette.id === name);
			console.log(generatePalette(selPalette));
			return <Palette {...props} palette={generatePalette(selPalette)} />;
		};
		let getColorSet = (props) => {
			let name = props.match.params.paletteName;
			let colorN = props.match.params.colorName;
			let selPalette = SeedColors.find((palette) => palette.id === name);
			let palette = generatePalette(selPalette);
			let selColor = [];
			for (let color in palette.colors) {
				// console.log(palette.colors[color]);
				for (let number of palette.colors[color]) {
					// console.log(number);
					if (number.id === colorN) selColor.push(number);
				}
			}
      console.log(selColor);
      selColor.shift()
			return <ColorSet {...props} palette={selColor} />;
		};
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={(routeProps) => (
						<Palettes {...routeProps} SeedColors={SeedColors} />
					)}
				/>
				<Route exact path="/palette/:paletteName" render={getPalettes} />
				<Route
					exact
					path="/palette/:paletteName/color/:colorName"
					render={getColorSet}
					// render={() => <h1>colorssssssssss</h1>}
				/>
				<Route render={() => <h1>404, madafaca!!!</h1>} />
			</Switch>
			// <div className="App">
			// 	<Palette {...SeedColors[2]} />
			// </div>
		);
	}
}

export default App;
