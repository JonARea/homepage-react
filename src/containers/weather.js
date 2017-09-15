import React, { Component } from 'react'
import { getLocalWeather } from '../actions/weather'
import { fetchWeather } from '../actions/weatherByCity'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WeatherSearchInput from './weather_search_input'
import $ from 'jquery'
import '../styles/weather.css'


class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      searched: false
    }
  }

  onSubmit() {
    this.setState({searched: true})
  }

  renderLocalWeather() {
    const Description = this.props.weather.weather[0].description === '' ? 'Could not get your location' : this.props.weather.weather[0].description
    const Icon = this.props.weather.weather[0].icon
    const Temp = this.props.weather.main.temp
    const Hum =  this.props.weather.main.humidity

    return (
      <div>
        <h2>"Today's Weather"</h2>
        {Description}

        <img src={Icon} alt=''/>
        <p>Temperature: {Temp}</p>
        <p>Humidity: {Hum}</p>
      </div>
    )
  }

  componentDidMount() {
    $('div.content-detail').css('background-color', 'aliceblue').css('color','black')

  }

  handleClick() {
    this.props.getLocalWeather()
    this.setState({clicked: true})
  }

  render() {
    const tempData = this.props.weatherByCity.list ? this.props.weatherByCity.list[0].main.temp : ''
    console.log(tempData)
    return (
      <div>
        <div className='weather'>
          <button className='btn btn-primary' onClick={() => this.handleClick()}>
            Get your local weather
          </button>
          <h3 style={{fontStyle:'italic'}}>
            OR
          </h3>
          <WeatherSearchInput update={this.onSubmit.bind(this)}/>
        </div>
        <div className='local-weather'>
          {this.state.clicked ? this.renderLocalWeather : ''}
        </div>
        <div className='fetchWeather'>
          Weather Forecast

          Temperature: {tempData}


        </div>
      </div>
    )
  }

  componentWillUnmount() {
    $('div.content-detail').css('background-color', '#152020').css('color', 'aliceblue')
  }
}

function mapStateToProps(state) {
    return {
      weather: state.weather,
      formInput: state.form,
      weatherByCity: state.weatherByCity
    }
  }

function mapDispatchToProps(dispatch) {

  return {...bindActionCreators({ getLocalWeather, fetchWeather }, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);
