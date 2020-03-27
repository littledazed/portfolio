import React from "react";
import styled from "styled-components";
import imgPlaceholder from "./Image/placeholder.jpg";
import Navbar from "./Navbar/Navbar.js";
import Icon from "./Icon/Icon.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navbarHeight: 0, wrapperPadding: "0 " };
  }
  componentDidMount() {
    // console.log(this.child.navbarItemTextRef.current.getBoundingClientRect().x);
    // console.log(window.body.getBoundingClientRect());
    // console.log(window);

    this.setState({
      navbarHeight: this.child.navbarRef.current.getBoundingClientRect().height,
      wrapperPadding:
        this.state.wrapperPadding +
        this.child.navbarItemTextRef.current.getBoundingClientRect().x +
        "px"
    });
  }
  render() {
    return (
      <div>
        <Navbar
          ref={node => {
            this.child = node;
          }}
        />

        <div
          className="navbarSpacer"
          style={{
            backgroundColor: "transparent",
            height: this.state.navbarHeight
          }}
        ></div>
        <div
          className="wrapper"
          style={{
            width: "auto",
            padding: this.state.wrapperPadding,
            margin: "auto"
          }}
        >
          <h1>Lorem ipsum dolor sit amet</h1>
          <div style={{ maxWidth: "680px" }}>
            <p>
              I'm a problem-solving creative with a passion for coherent digital
              experiences. I love unraveling complexities with elegant solutions
              that bridge people and technology.
            </p>
            <p>
              In the past, I've worked in an in-house innovations lab, exploring
              the intersection of travel and emerging technologies through a
              design lens. Currently, I'm at a digital consultancy, designing
              custom software for various companies and industries.
            </p>
          </div>
          <div className="spacer-sm"></div>

          <div id="work" />

          <h2 style={{ padding: "1.75rem 0" }}>Work</h2>

          <div className="proj-container" style={{ paddingBottom: "3.5rem" }}>
            <div id="proj-1">
              <a href="/proj-1">
                <img src={imgPlaceholder} width="100%" />
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "4rem" }}>
                <a href="/proj-1">
                  <h3>Duis nostrud ea nulla est cillum</h3>
                </a>
              </div>

              <div
                style={{ width: "60%", marginLeft: "auto", display: "flex" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>

          <div className="proj-container">
            <div id="proj-1">
              <img src={imgPlaceholder} width="100%" />
            </div>
            <div style={{ display: "flex", paddingBottom: "4rem" }}>
              <div style={{ width: "40%", marginRight: "2rem" }}>
                <h3>Duis nostrud ea nulla est cillum</h3>
              </div>
              <div
                style={{ width: "66%", marginLeft: "auto", display: "flex" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
