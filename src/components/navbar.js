import React, { Component } from 'react'
import Box from '../containers/box'
import '../styles/nav.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='nav navbar-nav'>

            <Box title='homepage' id='homepage'/>

            <Box title='writings' id='writings'/>

            <Box title='projects' id='projects'/>

        </ul>
      </nav>
    )
  }
}
