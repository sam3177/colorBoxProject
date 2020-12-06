import sizes from './SizesHelper';

let styles = {
	'@global' : {
		'.drgItem-exit'        : {
			transform : 'scale(1)'
		},
		'.drgItem-exit-active' : {
			transform  : 'scale(0)',
			transition : 'transform 500ms ease-in-out'
            },
            '.drgItem-enter'        : {
			transform : 'scale(0)'
		},
		'.drgItem-enter-active' : {
			transform  : 'scale(1)',
			transition : 'transform 500ms ease-in-out'
		}
	},
	root      : {
		height   : '100%',
		width    : '100%',
		margin   : '0 auto',
		overFlow : 'hidden'
		// marginTop:'5px'
	}
};

export default styles;
