import sizes from './SizesHelper';

const styles = {
	root      : {
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		backgroundColor : 'grey',
		height          : '100%'
	},
	container : {
		width         : '50%',
		display       : 'flex',
		flexDirection : 'column',
		justifyContent: 'center',
		alignItems    : 'flex-start',
		flexWrap      : 'wrap',
		[sizes.down('lg')]:{
			width : '65%'
		},
		[sizes.down('md')]:{
			width : '80%'
		}
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
		gridGap             : '5%',
		[sizes.down('sm')]:{
			gridTemplateColumns : 'repeat(2, 40%)',
			gridGap             : '20%',
		}
	}
};
export default styles