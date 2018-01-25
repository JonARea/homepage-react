import React, { Component } from 'react';
import NavBoxes from './navBoxes'
import Contents from '../containers/detail_view'
import Header from './header'
import {homepage} from './home'
import '../styles/batik.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='batik'>
          <h2 className="purpose">
            Software Engineer currently looking for great opportunites
          </h2>
        </div>
        {homepage}
        <div className='container-fluid'>
          <NavBoxes />
        </div>
        <div className='container-fluid detail_view'>
          <Contents />
        </div>
      </div>

    );
  }
}

export default App;
