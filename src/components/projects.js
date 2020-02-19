import React from "react";
import "../styles/project_links.css";
import "../styles/content-detail.css";
import arimos from "../images/arimos.png";
import niyagapedia from "../images/sekaten.jpg";
import warbler from "../images/Warbler.png";
import Simon from "../containers/simon";
import Box from "../containers/box";

const Projects = () => (
  <div>
    <Box path="projects" title="Projects" id="projects" />
    <ul className="list-group project_list">
      <hr />
      <li className="project">
        <a href="https://github.com/whistling-duck-labs/warbler">
          <img
            className="projectPhoto warbler"
            src={warbler}
            alt="Warbler Desktop Application"
          />
          <h3>View the source code</h3>
        </a>
        <div className="projectDescription">
          <h2>Warbler</h2>
          <p>
            A desktop application for making easy database migrations.
            Responsible for migration scripting, testing, and implementation of
            the Redux store.
          </p>
          <h3>Technologies</h3>
          <p>Electron, React, Redux, Node.js, Webpack, Babel, Immutable.js</p>
          <a
            onClick={() => window.mixpanel.track("View Warbler Presentation")}
            href="https://www.youtube.com/watch?v=RLWiyAFp2mM"
          >
            Watch the presentation.
          </a>
        </div>
      </li>
      <hr />
      <li className="project">
        <div className="projectDescription">
          <h2>Niyagapedia</h2>
          <p>
            An encyclopedia of Javanese Gamelan Musicians. A permanent home for
            memories of talented people who have touched the lives of many.
          </p>
          <h4>Technologies</h4>
          <p>Node, Express, Pug, MongoLabs, Amazon S3, Heroku</p>
        </div>
        <a href="https://niyagapedia.herokuapp.com">
          <img
            className="projectPhoto niyagapedia"
            src={niyagapedia}
            alt="Sekaten"
          />
          <h3>Go to the Encyclopedia</h3>
        </a>
      </li>
      <hr />
      <li className="project">
        <a href="http://arimosjs.herokuapp.com">
          <img
            className="projectPhoto arimos"
            src={arimos}
            alt="Pixel Dungeon"
          />
          <h3>Play Arimos</h3>
        </a>
        <div className="projectDescription">
          <h2>Arimos</h2>
          <p>
            A retro pixel dungeon built in a 3-day hackathon. Multi-platform
            ready.
          </p>
          <h3>Technologies</h3>
          <p>Phaser.js, Express, Webpack, Cordova, Heroku</p>
          <a href="https://www.youtube.com/watch?v=RLWiyAFp2mM">
            Watch the presentation.
          </a>
        </div>
      </li>
      <hr />
    </ul>
    <div className="content-detail simon">
      <div className="container-simon">
        <h2>Turn up the volume and click the on-switch to start.</h2>
        <p>Javascript, HTML and CSS.</p>
        <Simon />
      </div>
    </div>
  </div>
);

export default Projects;
