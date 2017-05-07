import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {AppRoot} from './components/AppRoot';
import './config/axios';
import {appReducers} from './data/reducers';
import {rootSaga} from './data/sagas';
import './styles.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppRoot/>
  </Provider>,
  document.querySelector('[app-root]')
);
