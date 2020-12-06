import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from './Palette';
import Palettes from './Palettes';
import NewPaletteForm from './NewPaletteForm';
import ColorSet from './ColorSet';
import SeedColors from './SeedColors';
import { generatePalette } from './ColorHelper';
import './App.css';

class App extends Component {
	savedPalettes = JSON.parse(window.localStorage.getItem('savedPalettes'));
	state = { seed: this.savedPalettes || SeedColors };

	addPalette = (palette) => {
		this.setState(
			(st) => ({ seed: [ ...st.seed, palette ] }),
			this.saveToLocal
		);
	};
	saveToLocal = () => {
		window.localStorage.setItem(
			'savedPalettes',
			JSON.stringify(this.state.seed)
		);
	};
	deletePalette = (palette) => {
		let newSeed = this.state.seed.filter((pal) => pal !== palette);
		this.setState({ seed: newSeed }, this.saveToLocal);
	};
	render () {
		let { seed } = this.state;
		let getPalettes = (props) => {
			let name = props.match.params.paletteName;
			let selPalette = seed.find((palette) => palette.id === name);
			// console.log(generatePalette(selPalette));
			return (
				<div className="routeTranzition">
					<Palette {...props} palette={generatePalette(selPalette)} />
				</div>
			);
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
			return (
				<div className="routeTranzition">
					<ColorSet {...props} palInfo={palette} palette={selColor} />
				</div>
			);
		};

		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition timeout={500} key={location.key} classNames="item">
							<Switch location={location}>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										// <div className="routeTranzition">
											<Palettes
												{...routeProps}
												deletePalette={this.deletePalette}
												SeedColors={seed}
											/>
										// </div>
									)}
								/>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<div className="routeTranzition">
											<NewPaletteForm
												{...routeProps}
												seed={SeedColors}
												addPalette={this.addPalette}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteName"
									render={getPalettes}
								/>
								<Route
									exact
									path="/palette/:paletteName/color/:colorName"
									render={getColorSet}
								/>

								<Route render={() => <h1>404, madafaca!!!</h1>} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
