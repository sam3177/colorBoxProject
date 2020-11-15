import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
// import './ColorBox.css';

let styles = {
	root       : {
		width    : '20%',
		height   : '25%',
		position : 'relative'
	},
	lightText  : {
		color : 'white'
	},
	overlay    : {
		position   : 'absolute',
		top        : '0',
		left       : '0',
		zIndex     : '0',
		opacity    : '0',
		width      : '100%',
		height     : '100%',
		transition : 'transform 0.5s ease-in-out',
		'&$active' : {
			opacity   : '1',
			zIndex    : '9',
			transform : 'scale(10)',
			position  : 'absolute'
		}
	},

	content    : {
		width          : '100%',
		display        : 'flex',
		position       : 'absolute',
		bottom         : '0',
		right          : '0',
		justifyContent : 'space-between'
	},
	name       : {
		padding  : '4px',
		fontSize : '10px'
	},
	more       : {
		padding         : '3px',
		backgroundColor : 'rgba(255, 255, 255, 0.623)',
		'& a'           : {
			textDecoration : 'none',
			color          : 'black'
		}
	},
	copyButton : {
		padding         : '3px',
		width           : '80px',
		height          : '30px',
		border          : 'none',
		outline         : 'none',
		transition      : 'background-color 0.5s ease-in-out',
		backgroundColor : 'rgba(255, 255, 255, 0.3)',
		display         : 'inline-block',
		position        : 'absolute',
		top             : '50%',
		left            : '50%',
		marginLeft      : '-40px',
		marginTop       : '-15px',
		opacity         : '0',
		transition      : 'opacity 0.2s ease-in-out',
		cursor          : 'pointer'
	},
	copy       : {
		height    : '100%',
		position  : 'relative',
		cursor    : 'pointer',
		'&:hover' : {
			'&$copyButton' : {
				opacity : '1'
			}
		}
	},
	overlayMsg : {
		position       : 'fixed',
		top            : '0',
		left           : '0',
		bottom         : '0',
		right          : '0',
		transform      : 'scale(0.1)',
		display        : 'flex',
		opacity        : '0',
		justifyContent : 'center',
		alignItems     : 'center',
		flexDirection  : 'column',
		'& h1'         : {
			textAlign       : 'center',
			width           : '100%',
			backgroundColor : 'rgba(255, 255, 255, 0.408)'
		},
		'&$active'     : {
			opacity         : '1',
			zIndex          : '10',
			transform       : 'scale(1)',
			transition      : 'all 0.4s ease-in-out',
			transitionDelay : '0.3s'
		}
	}
};
class ColorBox extends Component {
	state = { copied: false };
	handleCopy = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1000);
		});
	};
	render () {
		const { classes } = this.props;
		const { name, id, hex } = this.props.background;
		let isDark = chroma(hex).luminance() < 0.1;
		return (
			<CopyToClipboard text={this.props.toCopy} onCopy={this.handleCopy}>
				<div className={classes.root} style={{ backgroundColor: hex }}>
					<div
						className={`${classes.overlay} ${this.state.copied &&
							classes.active}`}
						style={{ backgroundColor: hex }}
					/>
					<div
						className={`${classes.overlayMsg} ${this.state.copied &&
							classes.active}`}
					>
						<h1 className={isDark && classes.lightText}>COPIED</h1>
						<p className={isDark && classes.lightText}>{this.props.toCopy}</p>
					</div>
					<div className={classes.copy}>
						<button className={classes.copyButton}>COPY</button>
						<div className={classes.content}>
							<span
								className={`${classes.name} ${isDark && classes.lightText}`}
							>
								{name.toUpperCase()}
							</span>
							{this.props.link && (
								<span className={classes.more}>
									<Link
										to={`/palette/${this.props.palName}/color/${id}`}
										onClick={(e) => e.stopPropagation()}
									>
										MORE
									</Link>
								</span>
							)}
						</div>
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
