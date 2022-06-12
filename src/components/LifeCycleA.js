import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :' Constructor'
      }
      console.log('LifeCycleA Constructor: '+ this.state.name);

      console.log('LifeCycleA Constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps');

        return {
            name :' getDerivedStateFromProps'
         };
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount');

    }
  render() {
    console.log('LifeCycleA render');

    return (
      <div>
       <h1>{this.state.name}</h1> 
        <div>lifeCycle A</div>
        <LifeCycleB />
      </div>
    )
  }
}
/*
Result : 
LifeCycleA Constructor:  Constructor
LifeCycleA LifeCycleA Constructor
LifeCycleA LifeCycleA getDerivedStateFromProps
LifeCycleA LifeCycleA render
LifeCycleB LifeCycleB Constructor:  Constructor
LifeCycleB LifeCycleB Constructor
LifeCycleB LifeCycleB getDerivedStateFromProps
LifeCycleB LifeCycleB render
LifeCycleB LifeCycleB componentDidMount
LifeCycleA LifeCycleA componentDidMount

*/
export default LifeCycleA