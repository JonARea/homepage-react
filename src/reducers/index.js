import { combineReducers } from 'redux';
import showDetail from './reducer_show_detail'
import contents from './reducer_contents'
import quote from './reducer_quote'
import weather from './reducer_weather'
import weatherByCity from './reducer_weatherByCity'
import changeBackground from './changeBackground'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  contents,
  showDetail,
  changeBackground,
  quote,
  weather,
  weatherByCity,
  form: formReducer
});
export default rootReducer;
