import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createLogger from 'redux-logger';
import './index.css';

const initalState = "laptop";

const selectedTab = (state = initalState, action) => {
  switch (action.type) {
    case 'SET_TAB':
      return action.selected;
    case 'CHANGE_TAB':
      return action.selected;
    default:
      return state;
  }
}

const modifyList = (state = [], action) => {
  switch (action.type) {
    case 'VIEW_LIST':
      return {};
    case 'ADD_DEVICE':
      return {};
    case 'DELETE_DEVICE':
      return {};
    case 'EDIT_DEVICE':
      return {};
    default:
      return state;
  }
}

const logger = createLogger();
const reducers = combineReducers({ selectedTab });
const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
