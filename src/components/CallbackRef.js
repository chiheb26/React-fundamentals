import React, { Component } from 'react'

class CallbackRef extends Component {
    constructor(props) {
      super(props)
        this.callbackRef=null
        this.setCallbackRef=(element)=>{this.callbackRef=element}    
    }
    componentDidMount(){
        if(this.callbackRef){
            this.callbackRef.focus()
        }
    }
    handleClick=()=>{alert(this.callbackRef.value)}
    render() {
    return (
      <div>
        <input type="text" ref={this.setCallbackRef} />
        <button onClick={this.handleClick}>Click Callback Ref</button>
      </div>
    )
  }
}

export default CallbackRef