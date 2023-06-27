// Add some state to the App component

import React, { Component } from 'react';


class Counter extends Component {
  state = { count: 20 };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onReset = () => {
    this.setState({ count: 0 });
  };

  onRemove = () => {
    this.setState({ count: 0});
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.onAdd}>Add One</button>
        <button onClick={this.onMinus}>Minus One</button>
        <button onClick={this.onReset}>Reset</button>
        <button onClick={this.onReset}>Remove</button>
      </>
    );
  }
}

export default Counter;