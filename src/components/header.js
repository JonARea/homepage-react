import React, {Component} from 'react'
import gong from '../images/gongedit.jpg';
import Headroom from 'react-headroom'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import linkedin  from '../images/linkedin.png'
import gmail from '../images/gmail-icon.png'
import '../styles/header.css'

export default class Header extends Component {

  render () {
    return (
      <Headroom className="headroom">
        <h1>Jon Rea</h1>
        <a className="nav-link" href="mailto:jonarea@gmail.com">
          <img id="gmail" src={gmail} alt="Email me"/>
        </a>
        <a className='nav-link' href="https://web.facebook.com/jon.rea.7946">
          <img className="nav-icon" src={facebook} alt="My facebook page"/>
        </a>
        <a className='nav-link' href='https://github.com/JonARea'>
          <img className="nav-icon" src={github} alt='My Github page'/>
        </a>
        <a className='nav-link' href='https://www.linkedin.com/in/jon-andrew-rea/'>
          <img className="nav-icon" src={linkedin} alt='My LinkedIn page'/>
        </a>
      </Headroom>
    )
  }
}
