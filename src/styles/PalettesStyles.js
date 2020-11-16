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
		alignItems    : 'flex-start',
		flexWrap      : 'wrap'
	},
	nav       : {
		padding        : '1rem',
		display        : 'flex',
		color          : 'white',
		justifyContent : 'space-between',
		'& h2'         : {
			margin : '0'
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