const styles = {
	link   : {
		textDecoration : 'none'
	},
	root   : {
		backgroundColor : 'white',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		textDecoration  : 'none',
		color           : 'black',
		fontWeight      : '600',
		display         : 'flex',
		flexDirection   : 'column',
		justifyContent  : 'flex-end',
		cursor          : 'pointer'
	},
	colors : {
		display         : 'flex',
		flexWrap        : 'wrap',
		backgroundColor : 'grey',
		width           : '95%',
		height          : '9vh',
		// borderRadius    : '5px',
		overFlow        : 'hidden',
		// border       : '1px solid black',
		margin          : '0 auto'

		// '& .color' : {
		// 	width  : '20%',
		// 	height : '20px'
		// },
		// '& .color:nth-of-type(1)' : {
		//    borderRadius : '5px 0 0 0'
		// },
		// '& .color:nth-of-type(5)':{
		//    borderRadius : '0 5px 0 0'
		// },
		// '& .color:nth-of-type(16)':{
		//    borderRadius : '0 0 0 5px'
		// },
		// '& .color:nth-of-type(20)':{
		//    borderRadius : '0 0 5px 0'
		// }
	},

	color  : {
		width    : '20%',
		height   : '25%',
		display  : 'inline-block',
		// margin       : '0 auto',
		position : 'relative'
		// marginBottom : '-3px'
	},

	title  : {
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		margin         : '5px'
	}
};
export default styles;
