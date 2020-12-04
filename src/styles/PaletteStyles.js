import sizes from './SizesHelper';

const styles = {
	palette : {
		width          : '100%',
		height : '100vh',
		display        : 'flex',
		flexDirection  : 'column',
		justifyContent : 'center'
	},
	colors  : {
		width    : '100%',
		height   : '90vh',
		[sizes.down('sm')]:{
			position : 'absolute',
			bottom :0
		}
		// display  : 'flex',
		// alignItems         : 'flex-start',
		// flexWrap : 'wrap'
	}
};
export default styles;
