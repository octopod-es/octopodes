import React from 'react';
import reactDOM from 'react-dom';
import App from './client/app';
import store from './client/store';
import { Provider } from 'react-redux';

reactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app'));
