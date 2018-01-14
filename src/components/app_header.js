import React, {Component} from 'react'
import gong from '../images/gongedit.jpg';
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import '../styles/App.css'

export default class AppHeader extends Component {
    render() {
      return (
        <div className="App-header">
          <a id='facebooklink' href="https://web.facebook.com/jon.rea.7946" className="nav-link">
            <img id="facebook" src={facebook} alt="My facebook page"/>
          </a>
          <a id='githublink' href='https://github.com/JonARea' className='nav-link'>
            <img id='github' src={github} alt='My Github page'/>
          </a>
          <h1>Jon Rea</h1>
          <img id='codewars' src='https://www.codewars.com/users/JonARea/badges/micro' alt='codewars badge'/>
        </div>
      )
    }
  }
