import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { fetchWeather } from '../actions/weatherByCity'
import { bindActionCreators } from 'redux'
import '../styles/weatherSearchInput.css'



class WeatherSearchInput extends Component {


  submit(input, dispatch) {
    dispatch(fetchWeather(input.citySearch))
    this.props.update()
    this.props.reset()
  }

  render() {
    return (
      <form onSubmit={
        this.props.handleSubmit(this.submit.bind(this))
      }>
        <Field
          name='citySearch'
          component='input'
          type='text'
          placeholder='Search for weather from any city here'
        />
      </form>
    )
  }

}

export default reduxForm({
  form: 'WeatherSearch',
})(WeatherSearchInput)
