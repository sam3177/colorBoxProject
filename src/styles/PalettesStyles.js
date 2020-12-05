import sizes from './SizesHelper';
import Confetti from './Confetti.svg';
const styles = {
	'@global' : {
		'.item-exit'        : {
			opacity : '1'
		},
		'.item-exit-active' : {
			opacity    : '0',
			transition : 'opacity 500ms ease-in-out'
		}
	},
	root      : {
		display          : 'flex',
		justifyContent   : 'center',
		alignItems       : 'flex-start',
		/* background by SVGBackgrounds.com */
		background       : `url(${Confetti})`,
		overFlow         : 'scroll',
		[sizes.up('xs')]: {
			height : '100vh'
		}
	},
	container : {
		width              : '50%',
		display            : 'flex',
		flexDirection      : 'column',
		justifyContent     : 'center',
		alignItems         : 'flex-start',
		flexWrap           : 'wrap',
		[sizes.down('lg')]: {
			width : '65%'
		},
		[sizes.down('md')]: {
			width : '80%'
		},
		[sizes.down('xs')]: {
			width : '70%'
		}
	},
	nav       : {
		padding        : '1rem',
		color          : 'white',
		width          : '94%',
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		'& h2'         : {
			margin : '0'
		},
		'& a'          : {
			color : 'white'
		}
	},
	palettes  : {
		width               : '100%',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%',
		[sizes.down('sm')]: {
			gridTemplateColumns : 'repeat(2, 48%)',
			gridGap             : '2vh'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns : 'repeat(1, 100%)',
			gridGap             : '2vh'
		}
	}
};
export default styles;
