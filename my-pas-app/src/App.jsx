// Homework  - REACT
// Create a new react app (vite link above) = Done
// Create a component = Done
// Include that component in App.jsx = Done
// Please un comment code before you can run them based on individual homework

import React, { Component } from 'react';
import Elements from './components/Elements.jsx';
import Shopping from "./components/Shopping.jsx"
import Cars from './components/Cars.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <Elements />
        <Shopping />
        <Cars />
      </div>
    );
  }
}

export default App;

// Pass a prop into the component at #2 = Done

// import React, { Component } from 'react';
// import Property from './components/Property.jsx';

// class App extends Component {

//   render() {
//     return (
//       <>
//         <Property name={"Papa React"} />
//         <Property name={"React is Amazing Framework"} />
//       </>
//     );
//   }
// }

// export default App;

// Add some state to the App component

// import React, { Component } from 'react';

// class App extends Component {
//   state = { count: 0 };

//   onClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {

//     return<p onClick={this.onClick}>{this.state.count}</p>

//   }
// }

// export default App;
