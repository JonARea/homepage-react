import React, {Component} from 'react'
import gong from '../images/gongedit.jpg';
import Headroom from 'react-headroom'
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import linkedin  from '../images/linkedin.png'
import '../styles/header.css'

export default class Header extends Component {

  render () {
    return (
      <Headroom className="headroom">
        <h1>Jon Rea</h1>
        <a href="mailto:jonarea@gmail.com">
          <h3 className="email-link">Email</h3>
        </a>
        <a className='nav-link' href="https://web.facebook.com/jon.rea.7946">
          <img id="facebook" src={facebook} alt="My facebook page"/>
        </a>
        <a className='nav-link' href='https://github.com/JonARea'>
          <img id='github' src={github} alt='My Github page'/>
        </a>
        <a className='nav-link' href='https://github.com/JonARea'>
          <img id='linkedin' src={linkedin} alt='My LinkedIn page'/>
        </a>
      </Headroom>
    )
  }
}
