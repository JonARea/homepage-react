import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/simon.css'

class Simon extends Component {
  componentWillMount() {
    $('div.content-detail').css('background-image', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-vz_g3WI9RSUqhKIhd6KqFFpxt22PHYxJI6tJXRP1wNq2rTY")');
  }

  componentWillUnmount() {
    $('div.content-detail').css('background-image', 'none')
  }
  render() {
    return (
      <div id='simon-border'>
        <div className='button' id='blue-button'>
        </div>
        <div className='button' id='green-button'>
        </div>
        <div className='button' id='red-button'>
        </div>
        <div className='button' id='yellow-button'>
        </div>
        <div id='center-border'>
          <div id='controls'>
            <h1>Simon</h1>

            <div id='start-holder'>
              <div id='start-button'>
              </div>
              <p>START</p>
            </div>

            <div id='strict-holder'>
              <div id='strict-button'>
              </div>
              <p>STRICT</p>
            </div>

            <div id='on-off-holder'>
              <div id='on-off-switch'>
                <div id='on-off-toggle'>
                </div>
              </div>
              <p>ON OFF</p>
            </div>

            <div id='counter-holder'>
              <div id='counter'>
              </div>
              <p>COUNT</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Simon
