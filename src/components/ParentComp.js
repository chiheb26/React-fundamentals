import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    //class ParentComp extends PureComponent {
        constructor(props) {
      super(props)
    
      this.state = {
         name:'ThuNDeR'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:'ThuNDeR'})
        },2000)
    }
    render() {
        console.log('********  Parent Comp Render  *********');
        return (
      <div>
        <div>Parent Component</div>
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp