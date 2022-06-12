import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
   // this.clickHandler=this.clickHandler.bind(this)
    this.incrementFive=this.incrementFive.bind(this)

  }
  /*clickHandler() {
     this.setState(
        {
            count: this.state.count + 1
        },
        ()=>{
            console.log('CallBack value = '+this.state.count)
            }
        )
    console.log(this.state.count)
    } */
    clickHandler() {
        this.setState(
            (prevState,props)=> ({
                count : prevState.count+1
            }),()=>{
                console.log(`CallBack value = ${this.state.count} / Props Value = ${this.props.value}`)
                }
            

        )
            console.log(this.state.count)

    }
  incrementFive(){
    this.clickHandler()
    this.clickHandler()
    this.clickHandler()
    this.clickHandler()
    this.clickHandler()
    
  }
    render() {
    return (
      <div>
        <button onClick={this.incrementFive}>Counter</button>
        <h1>{this.state.count}</h1>
        </div>
    )
  }
}

export default Counter