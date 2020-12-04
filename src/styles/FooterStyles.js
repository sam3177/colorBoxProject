import sizes from './SizesHelper';


let styles = {
	root : {
		width          : '100%',
		position : 'absolute',
		bottom :'0',
		height         : '5vh',
		display        : 'flex',
		justifyContent : 'flex-end',
		alignItems     : 'center',
		'& span'       : {
			margin : '0 20px'
		},
		[sizes.down('sm')]:{
			display: 'none'
		}
	}
};
export default styles;
