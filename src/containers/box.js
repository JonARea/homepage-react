import React, { Component } from "react";
import "../styles/box.css";

class Box extends Component {
  render() {
    return (
      <div id={this.props.id} className="box">
        <h1 className="boxTitle">{this.props.title}</h1>
      </div>
    );
  }
}

export default Box;
