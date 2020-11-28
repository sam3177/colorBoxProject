const drawerWidth = 370;

const styles = (theme) => ({
	appBar               : {
		// 	'linear-gradient(135deg, rgba(237,1,214,1) 50%, rgba(9,245,32,1) 50%)',
		// backgroundColor:'gray',
		display        : 'flex',
      flexDirection  : 'row',
		justifyContent : 'space-between',
		transition     : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarShift          : {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : drawerWidth,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	},
	toolbar              : {
		width : '50%'
	},
	menuButton           : {
		marginLeft  : 12,
		marginRight : 20
	},
	hide                 : {
		display : 'none'
	},
	navBtnContainer      : {
		display        : 'flex',
		justifyContent : 'flex-end',
		alignItems     : 'center',
		margin         : '15px 0',
		width          : '40%',
		padding        : '0 24px',
		'& button'     : {
			fontSize        : '10px',
			// color           : 'white',
			width           : 'fit-content',
			height          : '1.5rem',
			backgroundColor : '#7B50F0'
		},
		'& a'          : {
			textDecoration : 'none',
			'& button'     : {
				backgroundColor : '#ED6A52',
				marginRight     : '2rem'
			}
		}
	},
	savePalettePopup     : {
		backgroundColor : 'white',
		width           : '40%',
		padding         : '20px',
		height          : '300px',
		position        : 'fixed',
		top             : '100px',
		right           : '30%',
		borderRadius    : '10px',
		display         : 'none'
	},
	showPopup            : { display: 'block' },
	validatorPaletteForm : {
		height        : '80%',
		display       : 'flex',

		flexDirection : 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		'& button'    : {
			backgroundColor : '#7B50F0',
			position        : 'absolute',
			bottom          : '30px',
			right           : '30%',
			width           : '40%'
		},
		'& h5'        : {
			display : 'inline-block',
			color   : 'red',
			margin  : '0 auto'
		}
	},
	textValidator        : {
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
	paletteSubmit        : {
		margin : '0 auto'
	}
});
export default styles;
