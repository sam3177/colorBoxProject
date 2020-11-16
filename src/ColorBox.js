import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles'

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
      let {copied}= this.state
		const { name, id, hex } = this.props.background;
		let isDark = chroma(hex).luminance() < 0.1;
		return (
			<CopyToClipboard text={this.props.toCopy} onCopy={this.handleCopy}>
				<div className={classes.root} style={{ backgroundColor: hex }}>
					<div
						className={`${classes.overlay} ${copied && classes.active}`}
						style={{ backgroundColor: hex }}
					/>
					<div
						className={`${classes.overlayMsg} ${copied &&
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
