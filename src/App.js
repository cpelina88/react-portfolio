import React, { Component } from 'react';
import './App.css';
import Home from './components/home.jsx';
import NavBar from './components/navbar.jsx';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <hr style={{borderColor: 'white'}}/>
        <div>
        <Home />
        </div>
      </div>
    );
  }
}

export default App;
