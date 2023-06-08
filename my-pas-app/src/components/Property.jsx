import React, { Component } from 'react';
class Property extends Component {
  
    render() { 
        return <button>{this.props.name }</button>
    }
}
 
export default Property;