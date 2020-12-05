import sizes from './SizesHelper';

let styles = {
	'@global' : {
		'.item-exit'        : {
			// opacity : '1',
			transform : 'scale(1)'
		},
		'.item-exit-active' : {
			// opacity    : '0',
			transform  : 'scale(0)',
			transition : 'transform 500ms ease-in-out'
            },
            '.item-enter'        : {
			// opacity : '1',
			transform : 'scale(0)'
		},
		'.item-enter-active' : {
			// opacity    : '0',
			transform  : 'scale(1)',
			transition : 'transform 500ms ease-in-out'
		}
	},
	root      : {
		// backgroundColor : 'pink',
		height   : '100%',
		width    : '99%',
		margin   : '0 auto',
		overFlow : 'hidden'
		// marginTop:'5px'
	}
	// [sizes.down('md')]:{
	//       display:'none'
	//       }
};

export default styles;
