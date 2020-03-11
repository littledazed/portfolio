import React from "react";
import "./Tooltip.css";

class TooltipArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isHovered: false };
	}

	render() {
		return (
			<div>
				<span>xxx</span>
			</div>
		);
	}
}

class Tooltip extends React.Component {
	constructor(props) {
		super(props);
		this.tooltipRef = React.createRef();
	}

	static defaultProps = {};

	render() {
		if (this.props.tooltipDisplay) {
			var tooltipDisplay = { display: "block",visibility:"visible"  };
		} else {
			var tooltipDisplay = { display: "block", visibility:"hidden"};
		}

		return (
			<div style={tooltipDisplay}>
				<div className="tooltip fade-in" style={this.props.tooltipPosition}>
					<span ref={this.props.tooltipRef}>{this.props.tooltipContent}</span>
				</div>
			</div>
		);
	}
}

class TooltipApp extends React.Component {
	constructor(props) {
		super(props);
		this.tooltipReference = React.createRef();

		this.state = {
			tooltipOpen: false,
		};
	}

	centerTooltipArea = e => {
		// console.log("centerTooltipArea");
	};
	displayTooltip = e => {
		// var tooltipDisplay = this.state.tooltipOpen ? "block" : "none";
	};

	positionTooltip = (e, param) => {
		// console.log(e.currentTarget);
		var clickArea = e.currentTarget.getBoundingClientRect();
		// console.log(param);

		this.setState({
			tooltipPosition: {
				// top: clickArea.y + clickArea.height - 8,
				// top:"-1rem",
				paddingTop:"-1rem",
				// left: clickArea.x,
				// left: "45%",
				// bottom: "auto",
				// right: "auto"
			}
		});
	};

	render() {
		var innerText;
		if (this.tooltipReference.current !== null) {
			var iterCount = 0;
			var computedStyle = this.tooltipReference.current.currentStyle;
			innerText = this.tooltipReference.current.innerText.length;
		}
		return (
			<div className="tooltip-wrapper">
			<div

				className="tooltip-area-container"
				onMouseEnter={e => {
					this.positionTooltip(e);
					console.log("open tooltip");
					this.setState({ tooltipOpen: true });
				}}
				onMouseLeave={e => {
					this.setState({ tooltipOpen: false });
				}}
			>

							
				<TooltipArea />
				</div>
				<div className="tooltip-container">
<Tooltip
					tooltipRef={this.tooltipReference}
					tooltipContent="Lorem ipsum"
					tooltipDisplay={this.state.tooltipOpen}
					// tooltipPosition={this.state.tooltipPosition}
				/>
				</div>
			</div>
		);
	}
}

export default TooltipApp;
