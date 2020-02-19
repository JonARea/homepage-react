import React, { Component } from "react";
import Headroom from "react-headroom";
import "../styles/header.css";
import { Link } from "@reach/router";

export default class Header extends Component {
  render() {
    return (
      <Headroom className="headroom">
        <h1>Jon Rea</h1>
        <div className="router-links">
          <Link to="projects">Projects</Link>
          <Link to="about">About Me</Link>
          <Link to="/">Play</Link>
        </div>
      </Headroom>
    );
  }
}
