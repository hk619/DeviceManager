import './App.css';
import logo from './logo.svg';
import Home from './Home/home';
import Login from './Login/login';
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props)

  }

  submit() {
  
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
