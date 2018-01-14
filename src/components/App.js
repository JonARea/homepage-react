import React, { Component } from 'react';
import NavBar from './navbar'
import Contents from '../containers/detail_view'
import AppHeader from './App_header'

class App extends Component {
  render() {
    return (
      <div>
        < AppHeader />
        <div className='container-fluid navigation'>
          <NavBar />
        </div>
        <div className='container-fluid detail_view'>
          <Contents />
        </div>
      </div>

    );
  }
}

export default App;
