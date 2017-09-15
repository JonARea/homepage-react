import $ from 'jquery'

const API_KEY = 'dfec481f243a08d9376be26fd3c3859d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`

export const WEATHERBYCITY = 'WEATHERBYCITY'


export function fetchWeather(city) {
  const URL = `${ROOT_URL}q=${city},us&appid=${API_KEY}`
  const request = $.ajax(URL)

  return {
    type: WEATHERBYCITY,
    payload: request
  }

}
