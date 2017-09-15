import { GET_WEATHER } from '../actions/weather'
// State argument is not app state, only the state that this reducer is responsible for
export default function(state = {
  weather: [{description: '', icon: ''}],
  main: {temp: '', humidity:''}
}, action) {
  switch(action.type) {
    case GET_WEATHER:
      return action.payload
    default:
      return state
  }
}
