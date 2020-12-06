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
	}
};
export default styles;
