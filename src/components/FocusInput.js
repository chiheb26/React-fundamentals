import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    
    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }
    focusChildInput=()=>{this.componentRef.current.focusInput()}
    render() {
    return (
      <div>
        <Input ref={this.componentRef}  />
        <button onClick={this.focusChildInput}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput