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
            <h2 className="purpose">
              Software Engineer currently looking for great opportunites
            </h2>
          </div>
          {/* {homepage} */}
        </div>
        <div className='container-fluid'>
          <NavBoxes />
        </div>
        <div className='container-fluid detail-view'>
          <Contents fixed />
        </div>
        <div className='container-fluid detail-view'>
          <Contents project="Simon" />
        </div>
        <div className='container-fluid detail-view'>
          <Class />
        </div>
        <div className='container-fluid footer'>
          (c) Jon Rea 2017
        </div>
      </div>

    );
  }
}

export default App;
