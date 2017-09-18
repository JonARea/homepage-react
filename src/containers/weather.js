import React, { Component } from 'react'
import { getLocalWeather } from '../actions/weather'
import { fetchWeather } from '../actions/weatherByCity'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WeatherSearchInput from './weather_search_input'
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

  renderLocalWeather(clicked) {
    if (!clicked) {
      return ('')
    } else if (this.props.weather.weather[0].description === '') {
      return (
        'Could not get your location'
      )
    } else {

      const Description = this.props.weather.weather[0].description
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

  }

  renderSearchedWeather(searched) {
    if (!searched) {
      return ''
    } else {
      const Temp = this.props.weatherByCity[0].main.temp === 0 ? 'calculating' : Math.floor(this.props.weatherByCity[0].main.temp * (9/5) - 459.67)
      const Humidity = this.props.weatherByCity[0].main.humidity
      const Description = this.props.weatherByCity[0].weather[0].description
      const City = this.props.weatherByCity[1]
      const Country = this.props.weatherByCity[2]
      const iconURL = `http://openweathermap.org/img/w/${this.props.weatherByCity[0].weather[0].icon}.png`


      return (
        <div>
          <h2>{City}, {Country}</h2>
          <h3>
            {Description}
            <img src={iconURL} alt='icon' />
          </h3>
          <p>{'Temperature: ' + Temp + '\u00B0'}</p>
          <p>Humidity: {Humidity}%</p>
        </div>
      )
    }
  }

  handleClick() {
    this.props.getLocalWeather()
    this.setState({clicked: true})
  }

  render() {

    return (

        <div className='weather small-container'>
          <button className='btn btn-primary' onClick={() => {this.handleClick()}}>
            Get your local weather
          </button>
          <div className='local-weather'>
            {this.renderLocalWeather(this.state.clicked)}
          </div>
          <h3 style={{fontStyle:'italic'}}>
            OR
          </h3>
          <WeatherSearchInput update={this.onSubmit.bind(this)}/>
          <div className='fetchWeather'>
            {this.renderSearchedWeather(this.state.searched)}
          </div>

        </div>



    )
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
