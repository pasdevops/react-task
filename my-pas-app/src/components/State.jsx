// Add some state to the App component

import React, { Component } from 'react';
import IsChild from './component/IsChild';

class App extends Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };



  render() {

    return (
      <>
        <p onClick={this.onClick}>{this.state.count}</p>
        <p onClick={this.onAdd}>{this.state.count}</p>
        <IsChild child={this.state.child} />
      </>
    );
    
    

  }
}

export default App;