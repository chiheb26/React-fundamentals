import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwardRefParentInput extends Component {
    
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    focusInput=()=>{this.inputRef.current.focus()}
    render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef}/>
        <button onClick={this.focusInput} >Focus Input</button>
      </div>
    )
  }
}

export default ForwardRefParentInput