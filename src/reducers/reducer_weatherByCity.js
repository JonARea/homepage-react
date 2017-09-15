import { WEATHERBYCITY } from '../actions/weatherByCity'

// State argument is not app state, only the state that this reducer is responsible for
export default function(state = [
  {
    main: {temp: 0},
    weather: [{
        description:'getting weather',
        icon: ''
      }]
  }, ''], action) {
  switch(action.type) {
    case WEATHERBYCITY:

      return [action.payload.list[0], action.payload.city.name, action.payload.city.country]
    default:
      return state
  }
}
