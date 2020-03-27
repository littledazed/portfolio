import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Tooltip from "../Tooltip/Tooltip.js";
import placeholderLogo from "../Image/logo.png";
import Icon from "../Icon/Icon.js";
import "./Navbar.css";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ICON_CODEPEN =
  "M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z";
const ICON_CODESANDBOX =
  "M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z";
const ICON_MEDIUM =
  "M46.908,23.95c-0.006-0.005-0.011-0.01-0.018-0.014l-0.01-0.005l-9.05-4.525c-0.061-0.031-0.125-0.051-0.19-0.068c-0.082-0.021-0.165-0.034-0.249-0.034c-0.347,0-0.692,0.174-0.878,0.477l-5.21,8.467l6.538,10.625l9.095-14.779C46.966,24.046,46.952,23.985,46.908,23.95z M28.433,35.958L37,40.241L28.433,26.32V35.958zM38.287,40.884l7.052,3.526C46.256,44.869,47,44.548,47,43.693V26.726L38.287,40.884z M26.946,23.964l-8.839-4.419c-0.16-0.08-0.312-0.118-0.449-0.118c-0.387,0-0.659,0.299-0.659,0.802v19.083c0,0.511,0.374,1.116,0.831,1.344l7.785,3.892c0.2,0.1,0.39,0.147,0.561,0.147c0.484,0,0.823-0.374,0.823-1.003V24.051C27,24.014,26.979,23.98,26.946,23.964z";
const ICON_LINKEDIN =
  "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z";
const ICON_SIZE = "20px";

class NavItemSocial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }
  render() {
    const iconFill = this.state.isHovered ? "blue" : "black";
    const SocialIconContainer = styled.div`
      cursor: pointer;
      display: inline-flex;
    `;

    return (
      <a
        className="nav-social"
        title={this.props.title}
        href={this.props.href}
        target="_blank"
        onMouseEnter={() => {
          this.setState({ isHovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHovered: false });
        }}
        onClick={() => {
          this.setState({ isHovered: false });
        }}
      >
        <SocialIconContainer>
          <Icon
            id={this.props.id}
            path={this.props.path}
            size={ICON_SIZE}
            viewBox={this.props.viewBox}
            fill={iconFill}
          />
        </SocialIconContainer>
      </a>
    );
  }
}

class NavItemText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }
  render() {
    var navItemStyle = {};
    if (!this.state.isHovered) {
      navItemStyle = {
        color: "black",
        borderBottom: "none"
      };
    } else {
      navItemStyle = {
        color: "red",
        borderBottom: "1px solid red"
      };
    }

    return (
      <a
        style={{
          textDecoration: "none",
          textTransform: "capitalize",
          cursor: "pointer"
        }}
        href={this.props.href}
        onMouseEnter={() => {
          this.setState({ isHovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHovered: false });
        }}
      >
        <div className="nav-text-container">
          <div className="nav-text" style={navItemStyle}>
            <span ref={this.props.navbarItemTextRef}>{this.props.text}</span>
          </div>
        </div>
      </a>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.navbarRef = React.createRef();

    this.navbarItemTextRef = React.createRef();
    this.state = {
      isScrollingDown: false
    };
  }

  handleScroll = e => {
    this.setState({
      scrollPos: e.currentTarget.scrollY,
      isScrollingDown: e.currentTarget.scrollY > this.state.scrollPos
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleClick = () => {
    console.log("clicked");

    setTimeout(() => {
      this.setState({ isScrollingDown: false });
    }, 1);
  };

  render() {
    const iconSize = "18px";
    const iconFill = "18px";
    return (
      <div
        ref={this.navbarRef}
        className={this.state.isScrollingDown ? "navbar hidden" : "navbar "}
      >
        <div id="nav">
          <div className="nav-container">
            <a href="../portfolio" className="nav-logo">
              <img src={placeholderLogo} width="24px" />
            </a>

            <div className="nav-item left">
              <NavItemText
                navbarItemTextRef={this.navbarItemTextRef}
                href="#work"
                text="work"
              />

              <NavItemText href="pages/resume.html" text="resume" />
            </div>

            <div className="nav-item right">
              <NavItemSocial
                title="LinkedIn"
                href="https://www.linkedin.com/in/eunjinnyseo/"
                id="icon-medium"
                path={ICON_LINKEDIN}
                viewBox="16 16 32 32"
              />

              <NavItemSocial
                title="Medium"
                href="https://medium.com/@eunjinnyseo"
                id="icon-medium"
                path={ICON_MEDIUM}
                viewBox="16 16 32 32"
              />

              <NavItemSocial
                title="Codepen"
                href="https://codepen.io/eunjinnyseo/pens/public"
                id="icon-codepen"
                path={ICON_CODEPEN}
                viewBox="0 0 100 100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
