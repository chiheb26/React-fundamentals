import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name :' Constructor'
        }
        console.log('LifeCycleB Constructor: '+ this.state.name);
  
        console.log('LifeCycleB Constructor');
      }
      static getDerivedStateFromProps(props,state){
          console.log('LifeCycleB getDerivedStateFromProps');
  
          return {
              name :' getDerivedStateFromProps'
           };
      }
      componentDidMount(){
          console.log('LifeCycleB componentDidMount');
  
      }
    render() {
      console.log('LifeCycleB render');
  
      return (
        <div>
         <h1>{this.state.name}</h1> 
          lifeCycle B
        </div>
      )
    }
}

export default LifeCycleB