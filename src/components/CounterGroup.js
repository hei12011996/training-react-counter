import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
  state = {sum: 0, version: 0};

  updateSum = (delta) => {
    this.state.sum += delta;
    this.setState(this.state);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.gpSize != prevProps.gpSize) {
      this.setState({sum: 0, version: this.state.version + 1});
    }
  }

  render() {
    return (
      <div>
        {new Array(this.props.gpSize).fill(0).map(() => <Counter onUpdate = {this.updateSum} version = {this.state.version} />)}
        <span>Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default CounterGroup;
