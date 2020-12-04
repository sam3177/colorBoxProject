import sizes from './SizesHelper';

const styles = {
	dialogPopUp   : {
		// width  : '50%',
		height : '30vh'
	},
	button        : {
		fontSize        : '10px',
		// color           : 'white',
		width           : 'fit-content',
		height          : '1.5rem',
		backgroundColor : '#7B50F0',
		color           : 'black'
	},
	openButton    : {
		[sizes.down('md')]: {
			width : '120px!important'
		}
	},
	dialogActions : {
		position : 'absolute',
		bottom   : '0',
		right    : '0'
	}
};
export default styles;
