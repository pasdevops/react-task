import React, { Component } from 'react';
import ListItem from './ListItem';
class Shopping extends Component {
    
    render() { 
        return (
          <div>
            <ul>
              <li>Bread</li>
              <li>Milk</li>
              <li>Eggs</li>
              <li>Butter</li>
              <li>Cheese</li>
              {this.props.myVeg.map((item) => {
                return <li>{item}</li>;
              })}
              {this.props.myVeg.map((item) => {
                return <ListItem item={item} />
              })}
            </ul>
          </div>
        );
    }
}
 
export default Shopping;