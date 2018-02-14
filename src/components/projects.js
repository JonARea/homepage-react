import React from 'react'
import '../styles/project_links.css'
import arimos from '../images/arimos.png'
import niyagapedia from '../images/sekaten.jpg'
import warbler from '../images/Warbler.png'

export const projects =
  <div>
    <ul className="list-group project_list">
    <li className="project">
        <a href="https://github.com/whistling-duck-labs/warbler">
          <img className="projectPhoto warbler" src={warbler} alt="Warbler Desktop Application" />
          View the source code
        </a>
        <div className="projectDescription">
          <h3>Warbler</h3>
          <p>A desktop application for making easy database migrations. Responsible for migration scripting, testing, and implementation of the Redux store.
          </p>
          <h4>
            Technologies
          </h4>
          <p>
            Electron, React, Redux, Node.js, Webpack, Babel, Immutable.js
          </p>
          <a href="https://www.youtube.com/watch?v=RLWiyAFp2mM">Watch the presentation.
          </a>
        </div>
      </li>
      <hr />
      <li className="project">
        <div className="projectDescription">
          <h3>
            Niyagapedia
          </h3>
          <p>
            An encyclopedia of Javanese Gamelan Musicians. A permanent home for memories of talented people who have touched the lives of many.
          </p>
          <h4>
            Technologies
          </h4>
          <p>
          Node, Express, Pug, MongoLabs, Amazon S3, Heroku
          </p>
        </div>
          <a href='https://niyagapedia.herokuapp.com'>
            <img className="projectPhoto niyagapedia" src={niyagapedia} alt="Sekaten" />
            Go to the Encyclopedia
          </a>
      </li>
      <hr />
      <li className="project">
        <a href="http://arimosjs.herokuapp.com">

          <img className="projectPhoto arimos" src={arimos} alt="Pixel Dungeon" />
          Play Arimos
        </a>
        <div className="projectDescription">
          <h3>Arimos</h3>
          <p>A retro pixel dungeon built in a 3-day hackathon. Multi-platform ready.
          </p>
          <h4>
            Technologies
          </h4>
          <p>
            Phaser.js, Express, Webpack, Cordova, Heroku
          </p>
          <a href="https://www.youtube.com/watch?v=RLWiyAFp2mM">Watch the presentation.
          </a>
        </div>
      </li>
      <hr />
    </ul>
  </div>
