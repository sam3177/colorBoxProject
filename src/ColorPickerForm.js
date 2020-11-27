import React, { Component } from 'react';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles';

// import seed from './SeedColors';

class ColorPickerForm extends Component {
	state = { color: 'green', name: '' };
	componentDidMount () {
		ValidatorForm.addValidationRule('isUniqueColorName', (value) =>
			this.props.colors.every(
				(color) => value.toLowerCase() !== color.name.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isUniqueColor', () =>
			this.props.colors.every(
				(color) => this.state.color.toLowerCase() !== color.color.toLowerCase()
			)
		);
	}
	colorChange = (color) => {
		this.setState({ color: color.hex });
		// console.log(color);
	};
	changeColorName = (e) => {
		this.setState({ name: e.target.value });
	};
	addNewColor = () => {
      this.props.addNewColor(this.state);
      this.setState({name: ''});
	};
	render () {
		let { classes, colors } = this.props;
		let { color, name } = this.state;
		let palSize = colors.length < 20;
		return (
			<div className={classes.formContainer}>
				<ChromePicker
					className={classes.ChromePicker}
					color={color}
					onChange={this.colorChange}
					onChangeComplete={this.colorChange}
				/>
				<ValidatorForm
					className={classes.validatorForm}
					onSubmit={this.addNewColor}
				>
					<TextValidator
						className={classes.textValidator}
						label="Color Name"
						onChange={this.changeColorName}
						value={name}
						validators={[ 'required', 'isUniqueColor', 'isUniqueColorName' ]}
						errorMessages={[
							'This field is required',
							'Color already in use',
							'Color Name already in use'
						]}
					/>
					<Button
						type="submit"
						style={{ backgroundColor: color }}
						// onClick={this.addColor}
						className={classes.colorSubmit}
						variant="contained"
						disabled={!palSize}
					>
						{
							palSize ? 'ADD COLOR' :
							'FULL PALETTE'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
