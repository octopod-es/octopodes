import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reactime from 'reactime';
import App from './client/app';
import store from './client/store';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

reactime(document.getElementById('app'));
