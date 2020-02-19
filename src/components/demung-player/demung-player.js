import React from "react";
import demungPic from "../../images/demungclip_slendro.png";
import "./demung-player.css";

const DemungPlayer = () => (
  <div className="demung">
    <div className="numbers">
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>5</div>
      <div>6</div>
      <div>1</div>
    </div>
    <img id="demung-pic" src={demungPic} alt="Demung"></img>
  </div>
);

export default DemungPlayer;
