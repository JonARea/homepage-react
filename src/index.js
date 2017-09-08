import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import './styles/index.css';
import App from './components/App';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import promiseMiddleware from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));
registerServiceWorker();
