import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends Component {
	state = { copied: false};
	handleCopy = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1000);
		});
	};
	render () {
		const { name,id, hex } = this.props.background;
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
						<h1>COPIED</h1>
						<p>{this.props.toCopy}</p>
					</div>
					<div className="ColorBox-copy">
						<button className="ColorBox-copyButton">COPY</button>
						<div className="ColorBox-content">
							<span className="ColorBox-name">{name.toUpperCase()}</span>
							{this.props.link && <span className="ColorBox-more">
                        <Link to={`/palette/${this.props.palName}/color/${id}`}>
                           MORE
                           </Link>
                     </span>}
						</div>
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
