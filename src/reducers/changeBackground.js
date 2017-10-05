import { CHANGE_BACKGROUND } from '../actions/index'
// State argument is not app state, only the state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case  CHANGE_BACKGROUND:
      return action.payload
    default:
      return state
  }
}
