import React, { Component } from 'react'
import '../styles/simon.css'
import { changeBackground } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
const yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
const greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
const redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')


class Simon extends Component {
  constructor() {
    super()

    this.state = {
      isOn: false,
      count: '',
      sequence: [],
      guess: []
    }
    this.toggleOnOff = this.toggleOnOff.bind(this)
    this.startSequence = this.startSequence.bind(this)
    this.lightButton = this.lightButton.bind(this)

    this.originalState = this.state
  }

  componentWillMount() {
    this.props.changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-vz_g3WI9RSUqhKIhd6KqFFpxt22PHYxJI6tJXRP1wNq2rTY")
  }

  componentWillUnmount() {
    this.props.changeBackground(null)
  }


  lightButton(e) {
    const button = e.target
    button.classList.add(button.id + '-lit')
    // eslint-disable-next-line
    const waitThenTurnOffButton = setTimeout(()=>{
      button.classList.remove(button.id + '-lit')
    }, 400)


    button.id === 'blue-button' ? blueSound.play() :
    button.id === 'yellow-button' ? yellowSound.play() :
    button.id === 'green-button' ? greenSound.play() :
    redSound.play()
    //check if your guess is correct, replay if not, go on if yes
    this.setState({ guess: [...this.state.guess, button.id] },
      () => {
        const GuessIsCorrectLength = this.state.guess.length === this.state.sequence.length
        const ButtonsAreCorrect = this.state.guess.every((button, index) => {
          return button === this.state.sequence[index]
        })

        if (!ButtonsAreCorrect) {
          document.getElementById('counter-number').innerHTML = '!!'
          // eslint-disable-next-line
          const resetCounter = setTimeout(() => {
            document.getElementById('counter-number').innerHTML = this.state.count
          }, 600)
          this.startSequence(true)
        } else if (ButtonsAreCorrect && GuessIsCorrectLength) {
          this.startSequence(false)
        }
      })
  }

  getARandomButton() {
    const randomNumber = Math.random()
    if (randomNumber < 0.25) {
      return 'green-button'
    } else if (randomNumber < 0.50) {
      return 'yellow-button'
    } else if (randomNumber < 0.75) {
      return 'blue-button'
    } else {
      return 'red-button'
    }
  }

  startSequence(replay) {
    console.log(replay)
    const randomButton = this.getARandomButton()
    const count = isNaN(this.state.count) ? 1 :
                  replay ? this.state.count :
                  this.state.count + 1
    const sequence = count === 1 ? [randomButton] :
                     replay ? this.state.sequence :
                     [...this.state.sequence, randomButton]
    let indexToPlay = 0

    this.setState({
      count: count,
      sequence: sequence,
      guess: []
    })

    console.log('indextoplay is ' + indexToPlay, 'button to play is ' + sequence[indexToPlay], 'sequence is ' + sequence)

    function setButtonInterval(callback, delay, repetitions) {
      let buttonsPlayed = 0;
      const intervalID = window.setInterval(function () {

         callback(buttonsPlayed);

         if (++buttonsPlayed === repetitions) {
             window.clearInterval(intervalID);
         }
      }, delay);
    }

    setButtonInterval((buttonsPlayed) => playTheButton(buttonsPlayed, sequence), 1600, sequence.length)

      //light it up but don't register a guess
    function playTheButton(indexToPlay, sequence) {
      const buttonID = sequence[indexToPlay]
      document.getElementById(buttonID).classList.add(buttonID + '-lit')

      // eslint-disable-next-line
      const waitThenTurnOffButton = setTimeout(()=>{
        document.getElementById(buttonID).classList.remove(buttonID + '-lit')
      }, 400)

      buttonID === 'blue-button' ? blueSound.play() :
      buttonID === 'yellow-button' ? yellowSound.play() :
      buttonID === 'green-button' ? greenSound.play() :
      redSound.play()


    }

  }

  toggleOnOff () {
    if (this.state.isOn) {
      this.setState(this.originalState)
    } else {
      this.setState({isOn: true, count: '-'})
    }
  }



  render() {
    //turn everything off but the 'on' switch
    const SimonStyle = this.state.isOn ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}
    const OnSwitchStyle = {pointerEvents: 'auto'}
    const OnToggleStyle = this.state.isOn ? {left: '24px'} : {left: '2px'}

    return (
      <div id='simon-border' style={SimonStyle}>
        <div className='button' id='blue-button' onMouseDown={this.lightButton}>
        </div>
        <div className='button' id='green-button' onMouseDown={this.lightButton}>
        </div>
        <div className='button' id='red-button' onMouseDown={this.lightButton}>
        </div>
        <div className='button' id='yellow-button' onMouseDown={this.lightButton}>
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
              <div className='on-off' id='on-off-switch' style={OnSwitchStyle} onClick={this.toggleOnOff}>
                <div className='on-off' id='on-off-toggle' style={OnToggleStyle}>
                </div>
              </div>
              <p id='off'>OFF</p>
            </div>

            <div id='counter-holder'>
              <div id='counter'>
                <p id='counter-number'>{this.state.count}</p>
              </div>
              <p>COUNT</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      background: state.changeBackground
    }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ changeBackground }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Simon);
