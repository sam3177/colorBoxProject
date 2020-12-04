import sizes from './SizesHelper';


const styles = {
	colorBox       : {
		width     : '20%',
		height    : '25%',
		position  : 'relative',
		// display   : 'inline-block',
      cursor    : 'pointer',
      float: 'left',
      marginLeft :'0',
		// marginTop : '-5px',
	
		'&:hover' : {
			'& svg' : {
            transform : 'scale(2.0)',
            color: 'white',
			}
      },
      [sizes.down('lg')]:{
         width: '25%',
         height: '20%'
      },
      [sizes.down('md')]:{
         width: '50%',
         height: '10%'
      },
      [sizes.down('sm')]:{
         width: '100%',
         height: '5%'
      },
   },
   content:{
      width          : '100%',
		display        : 'flex',
		position       : 'absolute',
		bottom         : '0',
		right          : '0',
      justifyContent : 'space-between',
      alignItems : 'flex-end',
      padding:'10px',
      textTransform: 'uppercase',
      fontSize : '10px'
   },
	deleteColorBox : {
      fontSize    : '15px',
      transition : 'all 300ms ease-in-out',
	}
};
export default styles;
