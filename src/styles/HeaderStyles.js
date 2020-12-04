import sizes from './SizesHelper';

const styles = {
	header      : {
		height             : '10vh',
		position           : 'absolute',
		top                : '0',
		width              : '100%',
		maxHeight          : '50px',
		display            : 'flex',
		justifyContent     : 'flex-start',
		alignItems         : 'flex-start',
		'& h3'             : {
			color   : 'black',
			display : 'inline-block',
			margin  : '0'
		},
		[sizes.down('sm')]: {
			height    : '100px',
			maxHeight : '100px'
		}
	},
	links       : {
		display    : 'flex',
		alignItems : 'center'
	},
	title       : {
		backgroundColor : 'rgba(194, 194, 194, 0.74)',
		height          : '100%',
		padding         : '15px',
		width           : 'fit-content',
		display         : 'flex',
		alignItems      : 'center'
	},
	back        : {
		marginLeft : '10px'
	},
	level       : {
		width  : '120px',
		margin : '0 15px'
	},
	select      : {
		display                                                 : 'flex',
		justifyContent                                          : 'flex-end',
		float:'right',
		width                                                   : '20%',
		height                                                  : '100%',
		'& .MuiInputBase-root.MuiInput-root.MuiInput-underline' : {
			marginRight : '10px'
		},
		position : 'absolute',
		right : '0',top : '0',
		[sizes.down('sm')]: {
			height : '50%',
		}
	},
	slider      : {
		width                                                                                             :
			'20rem',
		display                                                                                           :
			'inline-block',
		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus' : {
			backgroundColor : 'lime',
			border          : 'none',
			outline         : 'none',
			width           : '15px',
			height          : '15px'
			/* margin-top: 2px; */
		},
		'& .rc-slider-track'                                                                              : {
			backgroundColor : 'transparent'
		},
		'& .rc-slider-rail'                                                                               : {
			height : '5px'
		}
	},
	sliderBlock : {
		width              : '55%',
		display : 'flex',
		alignItems : 'center',
		justifyContent : 'flex-start',
		height : '100%',
		[sizes.down('sm')]: {
			position : 'absolute',
			justifyContent : 'center',

			bottom   : 0,
			right    : 0,
			left     : 0,
			height : '50%',
			width : '100%',
			// padding:'10px'
		}
	}
};
export default styles;
