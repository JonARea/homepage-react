import { combineReducers } from 'redux';
import showDetail from './reducer_show_detail'
import contents from './reducer_contents'
import quote from './reducer_quote'

const rootReducer = combineReducers({
  contents,
  showDetail,
  quote
});
export default rootReducer;
