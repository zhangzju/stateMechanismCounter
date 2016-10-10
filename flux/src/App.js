import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {increment, decrement} from './action';
import CountStore from './store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = CountStore.getList();
  }

  increment(evt) {
    increment();
  }

  decrement(evt) {
    decrement();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <p>{this.state.number}</p>
          <button id="increment" onClick={this.increment}>+</button>
          <button id="decrement" onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
