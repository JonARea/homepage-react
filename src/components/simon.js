import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/simon.css'

const blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
const yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
const greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
const redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')


class Simon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      count: ''
    }
    this.toggleOnOff = this.toggleOnOff.bind(this)
    this.startSequence = this.startSequence.bind(this)
  }

  componentWillMount() {
    $('div.content-detail').css('background-image', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-vz_g3WI9RSUqhKIhd6KqFFpxt22PHYxJI6tJXRP1wNq2rTY")');

  }

  componentWillUnmount() {
    $('div.content-detail').css('background-image', 'none')
  }

  lightButton(e) {
    console.log(e)
    e.target.classList.add(e.target.id + '-lit')
    e.target.id === 'blue-button' ? blueSound.play() :
    e.target.id === 'yellow-button' ? yellowSound.play() :
    e.target.id === 'green-button' ? greenSound.play() :
    redSound.play()

  }

  unlightButton(e) {
    e.target.classList.remove(e.target.id + '-lit')
  }

  startSequence() {
    this.setState({count: '1'})
    let sequence = []
    const buttonInterval = setInterval(playSequence.bind(this), 1600)

    function playSequence () {
      const randomNumber = Math.random()
      let button = null
      if (randomNumber < 0.25) {
        button = document.getElementById('green-button')

      } else if (randomNumber < 0.50) {
        button = document.getElementById('red-button')
      } else if (randomNumber < 0.75) {
        button = document.getElementById('blue-button')
      } else {
        button = document.getElementById('yellow-button')
      }

      this.lightButton({target: button})
      const waitThenTurnOffButton = setTimeout(turnOffButton(button).bind(this), 800)

      function turnOffButton(button) {
        this.unlightButton({target: button})
      }
    }
  }

  toggleOnOff () {
    if (this.state.on) {
      $('div.content-detail div').css({pointerEvents: 'none'})
      $('#on-off-switch').css({pointerEvents: 'auto'})
      $('#on-off-toggle').css({left: 0})
      this.setState({on: false})
    } else {
      $('div.content-detail *').css({pointerEvents: 'auto'})
      $('#on-off-toggle').css({left: '25px'})
      this.setState({on: true, count: ' --'})
    }
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
              <div id='start-button' onClick={this.startSequence}>
              </div>
              <p>START</p>
            </div>

            <div id='strict-holder'>
              <div id='strict-button'>
              </div>
              <p>STRICT</p>
            </div>

            <div className='on-off' id='on-off-holder'>
              <p id='on'>ON</p>
              <div className='on-off' id='on-off-switch' onClick={this.toggleOnOff}>
                <div className='on-off' id='on-off-toggle'>
                </div>
              </div>
              <p id='off'>OFF</p>
            </div>

            <div id='counter-holder'>
              <div id='counter'>
                <p>{this.state.count}</p>
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
