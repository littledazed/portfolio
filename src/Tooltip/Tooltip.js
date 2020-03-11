import React from "react";
import "./Tooltip.css";

class TooltipArea extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isHovered: false };
	}

	render() {
		return (
			<div
				style={{ background: "cornflowerblue" }}
				onMouseEnter={this.props.handleMouseEnter}
				onMouseLeave={this.props.handleMouseLeave}
			>
				xxx
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
		// console.log(this.tooltipRef.current);
		// if (this.tooltipRef.current) {
					// console.log(this.tooltipRef.current);
			// console.log(this.tooltipRef.current.getBoundingClientRect());
		// }

		// console.log("tooltip", this.selector);

		if (this.props.tooltipDisplay) {
			var tooltipDisplay = { display: "block" };
		} else {
			var tooltipDisplay = { display: "none" };
		}

		return (
			<div style={tooltipDisplay}  >
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
			edit: false,
			textValue: "Open the popover menu",
			tooltipOpen: false,
			tooltipMainStyle: { bottom: 0, right: 0 },
			tooltipArrowStyle: {
				borderLeft: this.tooltipArrowWidth / 2 + "px solid transparent",
				borderRight: this.tooltipArrowWidth / 2 + "px solid transparent",
				borderBottom: this.tooltipArrowHeight + "px solid transparent"
			}
		};
	}

	componentDidUpdate() {
		// setTimeout(() => {
		if (this.state.tooltipOpen) {
			window.addEventListener("click", this.closeTooltip);
		} else {
			window.removeEventListener("click", this.closeTooltip);
		}
		// }, 0);
	}

	openTooltip = e => {
		this.setState({ tooltipOpen: true });
	};

	closeTooltip = e => {
		this.setState({ tooltipOpen: false });
	};

	centerTooltipArea = e => {
		// console.log("centerTooltipArea");
	};
		displayTooltip = e => {
					var tooltipDisplay = this.state.tooltipOpen ? "block" : "none";
		}

	positionTooltip = e => {
		// console.log(e.currentTarget);
		var clickArea = e.currentTarget.getBoundingClientRect();


		this.setState({
			tooltipPosition: {
				top: clickArea.y + clickArea.height - 8,
				left: clickArea.x + clickArea.width / 2,
				bottom: "auto",
				right: "auto"
			}
		});
	};

	render() {
				if (this.tooltipReference.current !== null) {
					// console.log(this.tooltipReference.current);
					var iterCount=0
					var computedStyle = this.tooltipReference.current.currentStyle;
					console.log(this.tooltipReference.current);
				console.log(window.getComputedStyle(this.tooltipReference.current)["background-color"]);
					 				// computedStyle=		 setTimeout(() => {return window.getComputedStyle(this.tooltipReference.current, null).width},500);
// iterCount+=1;
// console.log(iterCount);
					// console.log(computedStyle);
		// console.log(this.tooltipReference.current.offsetWidth);
	}
		return (
			<div className="tooltip-area-container">
				<TooltipArea
					handleMouseEnter={e => {
						// this.centerTooltipArea(e);
						this.positionTooltip(e);
												// this.displayTooltip(e);
						this.openTooltip(e);
						// setTimeout(() => {
						// this.openTooltip(e);
						// }, 150);
					}}
					handleMouseLeave={e => {
						this.closeTooltip(e);
					}}
				/>
				{/* <div > */}
				<Tooltip
					tooltipRef={this.tooltipReference}
					tooltipContent="Lorem ipsum"
					tooltipDisplay={this.state.tooltipOpen}
					tooltipPosition={this.state.tooltipPosition}
				/>
				{/* </div> */}
			</div>
		);
	}
}

export default TooltipApp;
