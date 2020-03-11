import React from "react";

const IconPath = props => {
  return <path d={props.path} style={props.pathStyle} />;
};

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    size: "24px",
    viewBox: "0 0 24 24",
    path: "",
    stroke: "none",
    fill: "none",
    strokeWidth: "1px",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    scale: "scale(1,1)"
  };

  render() {
    return (
      <svg
        id={this.props.id}
        height={this.props.size}
        width={this.props.size}
        viewBox={this.props.viewBox}
      >
        <g transform={this.props.scale}>
          <IconPath
            path={this.props.path}
            pathStyle={{
              stroke: this.props.stroke,
              fill: this.props.fill,
              strokeWidth: this.props.strokeWidth,
              strokeLinecap: this.props.strokeLinecap,
              strokeLinejoin: this.props.strokeLinejoin
            }}
          />
        </g>
      </svg>
    );
  }
}
