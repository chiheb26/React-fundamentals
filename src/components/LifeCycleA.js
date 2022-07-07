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
    shouldComponentUpdate(){
      console.log('LifeCycleA shouldComponentUpdate');
      return true;
    }

    changeState=()=>this.setState({name:'ThuNDeR'})


    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null;
    }
    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate');
    }
  render() {
    console.log('LifeCycleA render');

    return (
      <div>
       <h1>{this.state.name}</h1> 
        <div>lifeCycle A</div>
        <button onClick={this.changeState}>Change State</button>
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