// Add some state to the App component

import React, { Component } from 'react';


class Counter extends Component {
  state = { count: 0 };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onReset = () => {
    this.setState({ count: this.state.count -0 });
  };

  render() {
    return (
      <>
        <p onClick={this.onAdd}>{this.state.count}</p>
        <p onClick={this.onMinus}>{this.state.count}</p>
        <p onClick={this.onReset}>{this.state.count}</p>
      </>
    );
  }
}

export default Counter;