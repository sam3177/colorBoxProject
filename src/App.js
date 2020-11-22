import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SeedColors from './SeedColors';
import Palette from './Palette';
import Palettes from './Palettes';
import ColorSet from './ColorSet';
import NewPaletteForm from './NewPaletteForm';
import './App.css';
import { generatePalette } from './ColorHelper';

class App extends Component {
	state = { seed: SeedColors };

	addPalette = (palette) => {
		this.setState((st) => ({ seed: [ ...st.seed, palette ] }));
	};

	render () {
		let { seed } = this.state;
		let getPalettes = (props) => {
			let name = props.match.params.paletteName;
			let selPalette = seed.find((palette) => palette.id === name);
			console.log(generatePalette(selPalette));
			return <Palette {...props} palette={generatePalette(selPalette)} />;
		};
		let getColorSet = (props) => {
			let name = props.match.params.paletteName;
			let colorN = props.match.params.colorName;
			let selPalette = seed.find((palette) => palette.id === name);
			let palette = generatePalette(selPalette);
			let selColor = [];
			for (let color in palette.colors) {
				for (let number of palette.colors[color]) {
					if (number.id === colorN) selColor.push(number);
				}
			}
			console.log(selColor);
			selColor.shift();
			return <ColorSet {...props} palInfo={palette} palette={selColor} />;
		};

		return (
			<Switch>
				<Route
					exact
					path="/"
					render={(routeProps) => (
						<Palettes {...routeProps} SeedColors={seed} />
					)}
				/>
				<Route
					exact
					path="/palette/new"
					render={(routeProps) => <NewPaletteForm {...routeProps} seed={seed} addPalette={this.addPalette}/>}
				/>
				<Route exact path="/palette/:paletteName" render={getPalettes} />
				<Route
					exact
					path="/palette/:paletteName/color/:colorName"
					render={getColorSet}
				/>
				<Route render={() => <h1>404, madafaca!!!</h1>} />
			</Switch>
		);
	}
}

export default App;
