const styles = (theme) => ({
	formContainer : {
		width : '100%'
	},
	ChromePicker  : {
		width : '100%!important'
		// marginTop: '40px'
	},
	validatorForm : {
		// border          : '1px solid red',
		width : '100%'
	},
	textValidator : {
		backgroundColor : 'rgb(0,0,0,.3)',
		borderRadius    : '5px 5px 0 0',
		margin          : '15px 0',
		width           : '100%',
		// padding:'15px 0',
		'& label'       : {
			margin : '0 15px'
		},
		'& input'       : {
			margin : '0 15px'
		}
	},
	colorSubmit   : {
		width  : '100%',
		height : '50px'
		// backgroundColor:'#31E2ED'
	}
});

export default styles;
