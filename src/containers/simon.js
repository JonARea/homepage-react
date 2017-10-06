import React, { Component } from 'react'
import Button from '../components/simon_button'
import '../styles/simon.css'
import { changeBackground } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Simon extends Component {
  constructor() {
    super()

    this.state = {
      isOn: false,
      count: '',
      sequence: [],
      guess: []
    }

    this.blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
    this.yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
    this.greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
    this.redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    this.toggleOnOff = this.toggleOnOff.bind(this)
    this.startSequence = this.startSequence.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.setButtonInterval = this.setButtonInterval.bind(this)

    this.originalState = this.state
  }

  componentWillMount() {
    this.props.changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-vz_g3WI9RSUqhKIhd6KqFFpxt22PHYxJI6tJXRP1wNq2rTY")
  }

  componentWillUnmount() {
    this.props.changeBackground(null)
  }


  clickButton(e) {
    const button = e.target

    this.playButton(button)

    //check if your guess is correct, isReplay if not, go on if yes
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

  playButton(button) {
    button.classList.add(button.id + '-lit')
    // eslint-disable-next-line
    const waitThenTurnOffButton = setTimeout(()=>{
      button.classList.remove(button.id + '-lit')
    }, 400)

    button.id === 'blue-button' ? this.blueSound.play() :
    button.id === 'yellow-button' ? this.yellowSound.play() :
    button.id === 'green-button' ? this.greenSound.play() :
    this.redSound.play()
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

  setButtonInterval(callback, delay, sequence) {
    const repetitions = sequence.length
    let buttonsPlayed = 0;

    const intervalID = window.setInterval(function () {

      const button = document.getElementById(sequence[buttonsPlayed])
      callback(button);

      //increment buttonsPlayed and check if sequence is finished
      if (++buttonsPlayed === repetitions) {
           window.clearInterval(intervalID);
      }
    }, delay);
  }

  startSequence(isReplay) {

    const randomButton = this.getARandomButton()
    const count = isNaN(this.state.count) ? 1 :
                  isReplay ? this.state.count :
                  this.state.count + 1
    const sequence = count === 1 ? [randomButton] :
                     isReplay ? this.state.sequence :
                     [...this.state.sequence, randomButton]

    this.setState({
      count: count,
      sequence: sequence,
      guess: []
    })

    this.setButtonInterval((button) => this.playButton(button), 1600, sequence)
  }

  toggleOnOff () {
    if (this.state.isOn) {
      this.setState(this.originalState)
    } else {
      this.setState({isOn: true, count: '-'})
    }
  }

  renderButtons() {
    const buttons = ['blue', 'red', 'yellow', 'green']
    return (buttons.map((name) => <Button name={name} clickButton={this.clickButton} />))
  }

  render() {
    //turn everything off but the 'on' switch
    const SimonStyle = this.state.isOn ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}
    const OnSwitchStyle = {pointerEvents: 'auto'}
    const OnToggleStyle = this.state.isOn ? {left: '24px'} : {left: '2px'}

    return (
      <div id='simon-border' style={SimonStyle}>
        {this.renderButtons()}

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeBackground }, dispatch)
}

export default connect(null, mapDispatchToProps)(Simon);
