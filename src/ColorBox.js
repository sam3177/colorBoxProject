import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

let styles={}
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
		const { name, id, hex } = this.props.background;
		let isDark = chroma(hex).luminance() < 0.1;
		return (
			<CopyToClipboard text={this.props.toCopy} onCopy={this.handleCopy}>
				<div className="ColorBox" style={{ backgroundColor: hex }}>
					<div
						className={

								this.state.copied ? 'ColorBox-overlay active' :
								'ColorBox-overlay'
						}
						style={{ backgroundColor: hex }}
					/>
					<div
						className={

								this.state.copied ? 'ColorBox-overlayMsg active' :
								'ColorBox-overlayMsg'
						}
					>
						<h1 className={isDark && 'light-text'}>COPIED</h1>
						<p className={isDark && 'light-text'}>{this.props.toCopy}</p>
					</div>
					<div className="ColorBox-copy">
						<button className="ColorBox-copyButton">COPY</button>
						<div className="ColorBox-content">
							<span
								className={

										isDark ? 'ColorBox-name light-text' :
										'ColorBox-name'
								}
							>
								{name.toUpperCase()}
							</span>
							{this.props.link && (
								<span className="ColorBox-more">
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

export default ColorBox;
