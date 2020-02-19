import React from "react";
import "./footer.css";
import gong from "../../images/gongedit.jpg";
import facebook from "../../images/facebook.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import gmail from "../../images/gmail-icon.png";

const Footer = () => (
  <div className="footer">
    <div className="links">
      <a className="nav-link" href="http://kusumalaras.org">
        <img id="gong" src={gong} alt="Gong" />
      </a>
      <a className="nav-link" href="mailto:jonarea@gmail.com">
        <img id="gmail" src={gmail} alt="Email me" />
      </a>
      <a className="nav-link" href="https://web.facebook.com/jon.rea.7946">
        <img className="nav-icon" src={facebook} alt="My facebook page" />
      </a>
      <a className="nav-link" href="https://github.com/JonARea">
        <img className="nav-icon" src={github} alt="My Github page" />
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/jon-andrew-rea/"
      >
        <img className="nav-icon" src={linkedin} alt="My LinkedIn page" />
      </a>
    </div>
    <div>(c) Jon Rea 2017</div>
  </div>
);

export default Footer;
