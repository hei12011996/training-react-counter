import React, { Component } from 'react';

class Counter extends Component {
  state = {number: 0};

  incrementCounter = () => {
    this.state.number++;
    this.updateParentCounterGroup(+1);
    this.setState(this.state);
  };

  decrementCounter = () => {
    this.state.number--;
    this.updateParentCounterGroup(-1);
    this.setState(this.state);
  };

  updateParentCounterGroup = (delta) => {
    this.props.onUpdate(delta);
  };

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

export default Counter;
