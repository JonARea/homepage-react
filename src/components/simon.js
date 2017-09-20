import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/simon.css'

const blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
const yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
const greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
const redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')


class Simon extends Component {

  componentWillMount() {
    $('div.content-detail').css('background-image', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-vz_g3WI9RSUqhKIhd6KqFFpxt22PHYxJI6tJXRP1wNq2rTY")');

  }

  componentWillUnmount() {
    $('div.content-detail').css('background-image', 'none')
  }

  lightButton(e) {
    e.target.classList.add(e.target.id + '-lit')
    e.target.id === 'blue-button' ? blueSound.play() :
    e.target.id === 'yellow-button' ? yellowSound.play() :
    e.target.id === 'green-button' ? greenSound.play() :
    redSound.play()

  }

  unlightButton(e) {
    e.target.classList.remove(e.target.id + '-lit')
  }

  render() {



    return (
      <div id='simon-border'>
        <div className='button' id='blue-button' onMouseDown={this.lightButton} onMouseUp={this.unlightButton}>
        </div>
        <div className='button' id='green-button' onMouseDown={this.lightButton} onMouseUp={this.unlightButton}>
        </div>
        <div className='button' id='red-button' onMouseDown={this.lightButton} onMouseUp={this.unlightButton}>
        </div>
        <div className='button' id='yellow-button' onMouseDown={this.lightButton} onMouseUp={this.unlightButton}>
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
              <p id='on'>ON</p>
              <div id='on-off-switch'>
                <div id='on-off-toggle'>
                </div>
              </div>
              <p id='off'>OFF</p>
            </div>

            <div id='counter-holder'>
              <div id='counter'>
                <p>12</p>
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
