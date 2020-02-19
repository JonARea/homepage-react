import React from "react";
import demungPic from "../../images/demungclip_slendro.png";
import "./demung-player.css";
import Gendhing from "../gendhing/gendhing";
import { wilujeng } from "../../notation/wilujeng";

const DemungPlayer = () => (
  <div>
    <div className="demung">
      <img id="demung-pic" src={demungPic} alt="Demung"></img>
    </div>
    <Gendhing notes={wilujeng}></Gendhing>
  </div>
);

export default DemungPlayer;
