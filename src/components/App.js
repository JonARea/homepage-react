import React, { Component } from "react";
import Header from "./header";
import Class from "./class";
import "../styles/app.css";
import { Router } from "@reach/router";
import Projects from "./projects";
import DemungPlayer from "./demung-player/demung-player";
import Footer from "./footer/footer";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Header />
        <Router>
          <DemungPlayer path="/" />
          <Projects path="projects" />
          <Class path="about" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
