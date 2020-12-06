// import chroma from 'chroma-js';
import sizes from './SizesHelper';

let styles = {
	root       : {
		width              : (props) =>

				props.link ? '20%' :
				'33.333%',
		height             : (props) =>

				props.link ? '25%' :
				'33.333%',
		position           : 'relative',
		float              : 'left',
		[sizes.down('lg')]: {
			width  : (props) =>

					props.link ? '25%' :
					'33.333%',
			height : (props) =>

					props.link ? '20%' :
					'33.333%'
		},
		[sizes.down('md')]: {
			width  : (props) =>

					props.link ? '50%' :
					'50%',
			height : (props) =>

					props.link ? '10%' :
					'20%'
		},
		'&:last-of-type'   : {
			[sizes.down('md')]: {
				width : (props) =>

						props.link ? '50%' :
						'100%'
			},
			[sizes.down('sm')]: {
				width : (props) =>

						props.link ? '100%' :
						'100%'
			}
		},

		[sizes.down('sm')]: {
			width  : (props) =>

					props.link ? '100%' :
					'100%',
			height : (props) =>

					props.link ? '5%' :
					'11.11%'
		}
		// [sizes.down('md')]: {
		// 	width              : (props) =>

		// 		props.link ? '50%' :
		// 		'100%',
		// 		height             : (props) =>

		// 		props.link ? '25%' :
		// 		'33%',
		// },
	},
	lightText  : {
		color : 'white'
	},
	overlay    : {
		position   : 'absolute',
		top        : '0',
		left       : '0',
		zIndex     : '0',
		opacity    : '0',
		width      : '100%',
		height     : '100%',
		maxWidth      : '100vw',
		maxHeight     : '100vh',
		transition : 'transform 0.6s ease-in-out'
	},
	active     : {
		opacity   : '1',
		zIndex    : '9',
		maxWidth      : '100vw',
		maxHeight     : '100vh',
		transform : 'scale(25)',
		position  : 'absolute'
	},

	content    : {
		width          : '100%',
		display        : 'flex',
		position       : 'absolute',
		bottom         : '0',
		right          : '0',
		justifyContent : 'space-between'
	},
	name       : {
		padding  : '4px',
		fontSize : '10px'
	},
	more       : {
		padding         : '3px',
		backgroundColor : 'rgba(255, 255, 255, 0.623)',
		'& a'           : {
			textDecoration : 'none',
			color          : 'black'
		}
	},
	copyButton : {
		padding         : '3px',
		width           : '80px',
		height          : '30px',
		border          : 'none',
		outline         : 'none',
		transition      :
			'background-color 0.5s ease-in-out, opacity 0.2s ease-in-out',
		backgroundColor : 'rgba(255, 255, 255, 0.3)',
		display         : 'inline-block',
		position        : 'absolute',
		top             : '50%',
		left            : '50%',
		marginLeft      : '-40px',
		marginTop       : '-15px',
		opacity         : '0',
		cursor          : 'pointer'
	},
	copy       : {
		height    : '100%',
		position  : 'relative',
		cursor    : 'pointer',
		'&:hover' : {
			'& button' : {
				opacity : '1'
			}
		}
	},
	overlayMsg : {
		position       : 'fixed',
		top            : '0',
		zIndex         : '-2',
		left           : '0',
		bottom         : '0',
		right          : '0',
		transform      : 'scale(0.1)',
		display        : 'flex',
		opacity        : '0',
		justifyContent : 'center',
		alignItems     : 'center',
		flexDirection  : 'column',
		'& h1'         : {
			textAlign       : 'center',
			width           : '100%',
			backgroundColor : 'rgba(255, 255, 255, 0.408)'
		},
		'&$active'     : {
			opacity         : '1',
			zIndex          : '10',
			transform       : 'scale(1)',
			transition      : 'all 0.3s ease-in-out',
			transitionDelay : '0.1s'
		}
	}
};
export default styles;
