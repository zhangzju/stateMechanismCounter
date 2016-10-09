import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dispatcher from './dispatcher'

class App extends Component {

  increment(evt) {
    dispatcher.dispatch({
      eventName: 'increment'
    });
  }

  decrement(evt) {
    dispatcher.dispatch({
      eventName: 'decrement'
    });
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
          <button id="increment" onClick={this.increment}>+</button>
          <button id="decrement" onClick={this.decrement}>-</button>
        </p>
      </div>
    );
  }
}

export default App;
