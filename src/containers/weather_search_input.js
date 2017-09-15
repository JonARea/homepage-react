import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { fetchWeather } from '../actions/weatherByCity'
import { bindActionCreators } from 'redux'

let submit = (input, dispatch) => {

  return dispatch(fetchWeather(input.citySearch))

}

const WeatherSearchInput = props => {
  const { handleSubmit, reset, submitSucceeded, update } = props

  if (submitSucceeded) {
    update()
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name='citySearch'
        component='input'
        type='text'
        placeholder='Search for weather from any city here'
      />
    </form>
  )
}


export default reduxForm({
  form: 'WeatherSearch',
})(WeatherSearchInput)
