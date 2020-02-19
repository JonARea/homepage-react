import React, { Component } from "react";
import Header from "./header";
import Class from "./class";
import "../styles/batik.css";
import { Router } from "@reach/router";
import Projects from "./projects";
import Box from "../containers/box";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Projects path="projects"></Projects>
          <Class path="about" />
        </Router>
        <div className="footer">(c) Jon Rea 2017</div>
      </div>
    );
  }
}

export default App;
