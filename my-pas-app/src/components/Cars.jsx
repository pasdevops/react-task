import React, { Component } from 'react';
class Cars extends Component {
    
    render() { 
        return <h2>Hi, I am a Car! and I belong to {this.props.myProp}</h2>;
    }
}
 
export default Cars;