import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonActions from './action';

class App extends Component {
  createNewItem(event) {
    ButtonActions.addNewItem('new item');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <p id="counter">0</p>
          <button id="increment">+</button>
          <button id="decrement">-</button>
        </p>
      </div>
    );
  }
}

export default App;
