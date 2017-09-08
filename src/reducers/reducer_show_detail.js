import { BOX_SELECTED } from '../actions/index'
// State argument is not app state, only the state that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case  BOX_SELECTED:
      return action.payload
    default:
      return state
  }
}
