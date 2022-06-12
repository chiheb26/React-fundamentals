import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ParentName: 'Parent'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(p) {
    alert(`Hello ${this.state.ParentName} From ${p}`);

  }

  //No need to event binding in the constructor
  // clickHandler= 
  //p => alert(`Hello ${this.state.ParentName} From ${p}`);
  render() {
    return (
      <div>
        <Child clickHandler={this.clickHandler} />
      </div>
    )
  }
}

export default Parent