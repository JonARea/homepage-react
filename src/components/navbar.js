import React, { Component } from 'react'
import batik from '../images/motif-batik-Sidomukti-solo.jpg'
import Box from '../containers/box'
import '../styles/nav.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='nav navbar-nav'>

            <Box title='homepage'/>

            <Box title='writings'/>

            <Box title='projects'/>

        </ul>
      </nav>
    )
  }
}
