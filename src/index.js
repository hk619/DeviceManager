import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
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

const detailsList = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_LIST':
      return [...state, ...action.listData];
    case 'ADD_DEVICE':
      return [...state, ...action.modelData];
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
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
