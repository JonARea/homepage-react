import React from 'react'
import ProjectLink from './project_link'
import '../styles/project_links.css'
import arimos from '../images/arimos.png'
import niyagapedia from '../images/sekaten.jpg'

export const projects =
  <div>
    <ul className="list-group project_list">
      <li className="project">
        <div className="projectDescription">
          <a href='https://niyagapedia.herokuapp.com'>
            Niyagapedia
          </a>
          <p>
            An encyclopedia of Javanese Gamelan Musicians
          </p>
          <p>
            A permanent home for memories of special musicians. Built using Node, Express, and Pug, hosted on Heroku, using MongoLab for model storage and S3 for photo uploads.
          </p>
        </div>
          <a href='https://niyagapedia.herokuapp.com'>
            <img className="projectPhoto niyagapedia" src={niyagapedia} alt="Sekaten" />
          </a>
      </li>
      <hr />
      <li className="project">
        <a href="http://arimosjs.herokuapp.com">
          <img className="projectPhoto arimos" src={arimos} alt="Pixel Dungeon" />
        </a>
        <div className="projectDescription">
          <a href="http://arimosjs.herokuapp.com">Arimos</a>
          <p>A retro pixel dungeon built in a 3-day hackathon     using Phaser.js. Multi-platform ready.
          </p>
        </div>
      </li>
      <hr />
    </ul>
  </div>
