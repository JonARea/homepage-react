import { GET_QUOTE } from '../actions/get_quote'
// State argument is not app state, only the state that this reducer is responsible for
export default function(state = {}, action) {
  switch(action.type) {
    case GET_QUOTE:
      return action.payload
    default:
      return state
  }
}
