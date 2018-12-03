import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0};

  incrementCounter = () => {
    this.state.number++;
    this.setState(this.state);
  }

  decrementCounter = () => {
    this.state.number--;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>
          +
        </button>
        <span>
          &nbsp;{this.state.number}&nbsp;
        </span>
        <button onClick={this.decrementCounter}>
          -
        </button>
      </div>
    );
  }
}

export default App;
