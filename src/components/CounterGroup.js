import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
  state = {'sum': 0};

  updateSum = (delta) => {
    this.state.sum += delta;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        {new Array(this.props.gpSize).fill(0).map(() => <Counter onUpdate = {this.updateSum}/>)}
        <span>Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
