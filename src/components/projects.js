import React from 'react'
import ProjectLink from './project_link'
import '../styles/project_links.css'

export const projects =
  <div>
    <ul className='project_list'>
      <li>
        <a href='https://niyagapedia.herokuapp.com'>Niyagapedia</a>
      </li>

      <ProjectLink title='quote_generator' className='link' />

    </ul>
  </div>
