const styles = {
	header : {
		height         : '10vh',
		maxHeight      : '50px',
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		'& h3'         : {
			color   : 'black',
			display : 'inline-block',
			margin  : '0'
		}
	},
	links  : {
		display    : 'flex',
		alignItems : 'center'
	},
	title  : {
		backgroundColor : 'rgba(194, 194, 194, 0.74)',
		height          : '100%',
		padding         : '15px',
		width           : 'fit-content',
		display         : 'flex',
		alignItems      : 'center'
	},
	back   : {
		marginLeft : '10px'
	},
	level  : {
		width  : '120px',
		margin : '0 15px'
	},
	slider : {
		width   : '30%',
		display : 'inline-block'
	},
	select : {
		display        : 'flex',
		justifyContent : 'flex-end',
		width          : '30%',
		height         : '100%'
	}
	// .rc-slider-handle,
	// .rc-slider-handle:hover,
	// .rc-slider-handle:active,
	// .rc-slider-handle:focus {
	// 	background-color: 'lime',
	// 	border:'none',
	// 	outline: 'none',
	// 	width:'15px',
	// 	height:'15px',
	// 	/* margin-top: 2px; */
	// }
	// .rc-slider-track{
	// 	background-color: 'transparent',
	// }
	// .rc-slider-rail{
	// 	height: '5px',
	// }
	// .MuiInputBase-root.MuiInput-root.MuiInput-underline{
	// 	margin-right: '10px',;
	// }
};
export default styles;
