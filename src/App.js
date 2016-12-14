import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login/login';
import Home from './Home/home';
import './App.css';
import { Router, Route, hashHistory, IndexRedirect, } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props)

  }

  submit() {
    console.log(this.props)
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
