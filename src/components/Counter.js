import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {number: 0, version: this.props.version};
  }

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

  componentDidUpdate = (prevProps) => {
    if (this.props.version != prevProps.version) {
      this.setState({number: 0, version: this.props.version});
    }
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

export default Counter;
