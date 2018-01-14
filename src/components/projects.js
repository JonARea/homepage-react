import React from 'react'
import ProjectLink from './project_link'
import '../styles/project_links.css'

export const projects =
  <div>
    <ul className='list-group project_list'>
      <li>
        <a href='https://niyagapedia.herokuapp.com'>
          Niyagapedia
        </a>
        <p>
          An encyclopedia of Javanese Gamelan Musicians
        </p>
        <p>
          A simple Wiki-like Express App hosted on Heroku, currently using Mongo for model storage and S3 for photo uploads
        </p>
      </li>
      <br />
      <li>
        <a href='https://apomodorotimertohelpmework.herokuapp.com'>
          My pomodoro timer
        </a>
        <p>
          A basic javascript pomodoro timer to help me remember to take breaks
        </p>
      </li>
      <br />

      <ProjectLink title='Quote_generator' className='link' />
      <p>
        For when you need random quotes in your life
      </p>
      <br />
      <ProjectLink title='Weather' className='link' />
      <p>
        Get your local weather or search for weather using the openWeather API
      </p>
      <br />
      <ProjectLink title='Calculator' className='link' />
      <p>
        A simple javascript calculator from scratch
      </p>
      <br />
      <ProjectLink title='Simon' className='link' />
      <p>
        A javascript implementation of the 80s light-up game
      </p>
    </ul>
  </div>
