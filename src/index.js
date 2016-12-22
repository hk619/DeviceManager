import './index.css';
import App from './App';
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { selectedTab, detailsList } from './Reducer/redux-store';
import { createStore, combineReducers, applyMiddleware } from "redux";

const logger = createLogger();
const reducers = combineReducers({ selectedTab, detailsList });
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
