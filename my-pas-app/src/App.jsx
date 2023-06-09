// Homework  - REACT
// Create a new react app (vite link above) = Done
// Create a component = Done
// Include that component in App.jsx = Done
// Please un comment code before you can run them based on individual homework

import React, { Component } from 'react';
import Elements from './components/Elements.jsx';
import Shopping from "./components/Shopping.jsx"
import Cars from './components/Cars.jsx';
import Counter from "./components/Counter";


class App extends Component {

  state = { test: "Pas", vegetables: ["Spinanach", "Brocolli", "Carrot"] };
  

  render() {
    return (
      <div>
        <p>{this.state.test}</p>
        <Elements />
        <Shopping myVeg={this.state.vegetables} />
        <Cars myProp={this.state.test} />
        <Counter />
      </div>
    );
  }
}

export default App;



