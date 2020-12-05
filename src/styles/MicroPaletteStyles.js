import sizes from './SizesHelper';

const styles = {
	link        : {
		textDecoration : 'none'
	},
	root        : {
		// margin : '0 auto',
		backgroundColor : 'white',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		textDecoration  : 'none',
		color           : 'black',
		fontWeight      : '600',
		display         : 'flex',
		flexDirection   : 'column',
		justifyContent  : 'flex-end',
		cursor          : 'pointer',
		'&:hover'       : {
			'& span' : {
				opacity : 1
			}
		}
	},
	color       : {
		width    : '20%',
		height   : '25%',
		display  : 'inline-block',
		margin   : '0',
		position : 'relative'
		// marginBottom : '-3px'
	},
	colors      : {
		display                 : 'flex',
		flexWrap                : 'wrap',
		// float:'left',
		backgroundColor         : 'grey',
		width                   : '95%',
		height                  : '9vh',
		borderRadius            : '5px',
		overFlow                : 'hidden',
		// border       : '1px solid black',
		margin                  : '10px auto',

		'& div:nth-of-type(1)'  : {
			borderRadius : '5px 0 0 0'
		},
		'& div:nth-of-type(5)'  : {
			borderRadius : '0 5px 0 0'
		},
		'& div:nth-of-type(16)' : {
			borderRadius : '0 0 0 5px'
		},
		'& div:nth-of-type(20)' : {
			borderRadius : '0 0 5px 0'
		}
	},

	title       : {
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		margin         : '5px'
	},
	deleteFloat : {
		position        : 'absolute',
		right           : '0',
		top             : '0',
		width           : '15%',
		height          : '20%',
		borderRadius    : '0 4px 0 0',
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'center',
		backgroundColor : 'red',
		fontSize        : '1.5rem',
		zIndex          : '66',
		opacity         : '0',
		transition             : 'all 0.3s ease-in-out'
	}
};
export default styles;
