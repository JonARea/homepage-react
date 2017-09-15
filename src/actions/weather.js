import $ from 'jquery'

export const GET_WEATHER = 'GET_WEATHER'

export function getLocalWeather () {
  let request = ''
  if ('geolocation' in navigator) {
    let success = (position) => {
      request = $.ajax({
      url: `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
      method: "get",
      dataType: 'jsonp'
      })
    }

    let error = (error) => {
      console.log('didnt get position')

    }
    let position = navigator.geolocation.getCurrentPosition(success, error)

    if (position === undefined) {
      return {
        type: 'dummy',
        payload: {}
      }
    }

      return {
        type: GET_WEATHER,
        payload: request
      }
  }
}
