import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import './assets/tailwind.css';
import App from './components/App';

import { createStore } from 'redux'
import rootReducer from './reducers/index.js'
import { Provider } from 'react-redux'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider >,
  document.getElementById('root')
);


