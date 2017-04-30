import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {AppRoot} from './components/AppRoot';
import {appReducers} from './data/reducers';
import './styles.scss';

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <AppRoot/>
  </Provider>,
  document.querySelector('[app-root]')
);
