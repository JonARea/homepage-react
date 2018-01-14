import React from 'react'
import Box from '../containers/box'
import '../styles/nav.css'

const NavBar = () => (
  <div className='navbar'>
    <Box title='homepage' id='homepage'/>

    <Box title='resume' id='resume'/>

    <Box title='projects' id='projects'/>
  </div>
)

export default NavBar
