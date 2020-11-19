const drawerWidth = 270;

const styles = (theme) => ({
	root          : {
		display : 'flex'
	},
	appBar        : {
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarShift   : {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : drawerWidth,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	},
	menuButton    : {
		marginLeft  : 12,
		marginRight : 20
	},
	hide          : {
		display : 'none'
	},
	drawer        : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerContent : {
		// border         : '2px solid black',
		width          : '90%',
		display        : 'flex',
		flexWrap       : 'wrap',
		justifyContent : 'center',
		margin         : 'auto auto',
		'& h5'         : {}
	},
	btnContainer  : {
		display                  : 'flex',
		margin                   : '15px 0',
		width                    : '100%',
		'& button'               : {
			fontSize : '10px',
			color:'white',
			width    : '50%'
		},
		'& button:first-of-type' : {
			backgroundColor : '#ED6A52'
		},
		'& button:last-of-type'  : {
			backgroundColor : '#7B50F0'
		}
	},
	ChromePicker  : {
		width : '100%!important'
		// marginTop: '40px'
	},
	textInput     : {
		width     : '100%',
		// height: '10px',
		margin    : '15px 0',
		// '& input' : {
		// 	padding : '10px 0 10px 0'
		// },
		// '& label' : {
		// 	bottom:'30px!important'
		// }
	},
	submit:{
		width: '100%',
		height:'50px',
		backgroundColor:'#31E2ED'
	},
	drawerPaper   : {
		width : drawerWidth
	},
	drawerHeader  : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : '0 8px',
		...theme.mixins.toolbar,
		justifyContent : 'flex-end'
	},
	content       : {
		flexGrow   : 1,
		padding    : theme.spacing(3),
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -drawerWidth
	},
	contentShift  : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	}
});
export default styles;
