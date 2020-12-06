import { drawerWidth } from '../Variables';

const styles = (theme) => ({
	root               : {
		display    : 'flex',
		alignItems : 'flex-end',
		height     : '100vh',
	},

	drawer             : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerContent      : {
		width          : '90%',
		display        : 'flex',
		flexWrap       : 'wrap',
		justifyContent : 'center',
		margin         : 'auto auto',
		'& h5'         : {}
	},
	drawerBtnContainer : {
		display                  : 'flex',
		margin                   : '15px 0',
		width                    : '100%',
		'& button'               : {
			fontSize : '10px',
			color    : 'white',
			width    : '50%'
		},
		'& button:first-of-type' : {
			backgroundColor : '#ED6A52'
		},
		'& button:last-of-type'  : {
			backgroundColor : '#7B50F0'
		}
	},

	textInput          : {
		width  : '100%',
		// height: '10px',
		margin : '15px 0'
	},

	drawerPaper        : {
		width : drawerWidth
	},
	drawerHeader       : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : '0 8px',
		...theme.mixins.toolbar,
		justifyContent : 'flex-end'
	},
	content            : {
		padding    : '0',
		width      : '100%',
		height     : 'calc(100vh - 64px)',

		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -drawerWidth
	},
	contentShift       : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	}
});
export default styles;
