const styles = {
	root      : {
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		backgroundColor : 'blue',
		height          : '100vh'
	},
	container : {
		width         : '60%',
		display       : 'flex',
		flexDirection : 'column',
		justifyContent: 'center',
		alignItems    : 'flex-start',
		flexWrap      : 'wrap'
	},
	nav       : {
		padding        : '1rem',
		color          : 'white',
		width: '94%',
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems: 'center',
		'& h2'         : {
			margin : '0'
		},
		'& a':{
			color: 'white',
		}
	},
	palettes  : {
		width               : '100%',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%'
	}
};
export default styles