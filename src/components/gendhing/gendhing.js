import React from "react";
import { Component } from "react";
import "./gendhing.css";

class Gendhing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      notes: props.notes,
      currentNote: 0
    };
  }

  togglePlayer = () => {
    const notation = document.getElementById("notation");
    this.setState(
      {
        play: !this.state.play
      },
      () => {
        if (this.state.play) {
          notation.style.animationPlayState = "running";
        } else {
          notation.style.animationPlayState = "paused";
        }
      }
    );
  };

  resetPlayer = () => {
    const notation = document.getElementById("notation");
    notation.style.animationPlayState = "paused";
    notation.style.marginLeft = 0;
    this.setState({
      play: false,
      currentNote: 0
    });
  };

  render() {
    const notation = this.state.notes.map((note, idx) => (
      <div className="note" key={idx}>
        {note}
      </div>
    ));
    return (
      <div>
        <button onClick={this.togglePlayer}>
          {this.state.play ? "Pause" : "Play"}
        </button>
        <button onClick={this.resetPlayer}>Reset</button>
        {<div id="notation">{notation}</div>}
      </div>
    );
  }
}

export default Gendhing;
