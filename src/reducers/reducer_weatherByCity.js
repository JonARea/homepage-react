import { WEATHERBYCITY } from '../actions/weatherByCity'

// State argument is not app state, only the state that this reducer is responsible for
export default function(state = {}, action) {
  switch(action.type) {
    case WEATHERBYCITY:
      console.log(action.payload)
      return {data: action.payload}
    default:
      return state
  }
}
