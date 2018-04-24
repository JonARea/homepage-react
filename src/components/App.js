import React, { Component } from 'react';
import NavBoxes from './navBoxes'
import Contents from '../containers/detail_view'
import Header from './header'
import Class from './class'
import '../styles/batik.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-row">
          <div className='batik'>
            <h1 className="purpose">
              Software Engineer currently looking for great opportunites
            </h1>
          </div>
        </div>
        <div>
          <NavBoxes />
        </div>
        <div className='detail-view'>
          <Contents fixed />
        </div>
        <div className='detail-view'>
          <Contents project="Simon" />
        </div>
        <div className='detail-view'>
          <Class />
        </div>
        <div className='footer'>
          (c) Jon Rea 2017
        </div>
      </div>

    );
  }
}

export default App;
