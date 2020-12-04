import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import styles from './styles/MetaFormDialogStyles';

class MetaFormDialog extends Component {
	componentDidMount () {
		ValidatorForm.addValidationRule('isUniquePaletteName', () =>
			this.props.seed.every(
				(palette) =>
					this.state.paletteName.toLowerCase() !==
					palette.paletteName.toLowerCase()
			)
		);
	}
	state = { openForm: false, openPicker: false, paletteName: '' };
	handleOpenForm = () => {
		this.setState({ openForm: true });
   };
   handleOpenPicker = () => {
		this.setState({ openForm: false, openPicker: true });
	};
	handleClose = () => {
		this.setState({ openForm: false, openPicker: false, paletteName: '' });
	};
	changePaletteName = (e) => {
		this.setState({ paletteName: e.target.value });
	};
	addNewPalette = (emoji) => {
      console.log(emoji);
		this.props.addNewPalette({palName:this.state.paletteName, emoji: emoji.native});
	};
	render () {
		let { openForm, openPicker, paletteName } = this.state;
		let { classes } = this.props;
		return (
			<div>
				<Button
					className={classes.openButton}
					variant="outlined"
					// color="primary"
					onClick={this.handleOpenForm}
				>
					Save Palette
				</Button>
				<Dialog
					open={openForm}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<ValidatorForm
						className={classes.dialogPopUp}
						// className={classes.validatorPaletteForm}
						onSubmit={this.handleOpenPicker}
					>
						<DialogTitle id="form-dialog-title">
							{' '}
							Add a Palette Name
						</DialogTitle>
						<DialogContent>
							{/* <DialogContentText>
                  
						</DialogContentText> */}
							<TextValidator
								// className={classes.textValidator}
								label="Palette Name"
								fullWidth
								focused={true}
								onChange={this.changePaletteName}
								value={paletteName}
								validators={[ 'required', 'isUniquePaletteName' ]}
								errorMessages={[
									'This field is required',
									'Palette Name already in use'
								]}
							/>
							{/* <Button
								type="submit"
								// onClick={this.addNewColor}
								// className={classes.paletteSubmit}
								variant="contained"
							>
								ADD PALETTE
							</Button> */}
						</DialogContent>
						<DialogActions className={classes.dialogActions}>
							<Button
								onClick={this.handleClose}
								className={classes.button}
								variant="contained"
								// color="primary"
							>
								Cancel
							</Button>
							<Button type="submit" className={classes.button}>
								Add New Palete
							</Button>
						</DialogActions>
					</ValidatorForm>
               </Dialog>
               <Dialog 
               open={openPicker}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
               >
            <Picker 
            onSelect={this.addNewPalette}
            />
               </Dialog>
				
			</div>
		);
	}
}

export default withStyles(styles)(MetaFormDialog);
