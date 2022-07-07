import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import { ThemeConsumer } from './themeContext'

class ComponentF extends Component {
  render() {
    return (
        <ThemeConsumer>
             {theme=>(
                    <UserConsumer>
                    {username=>{
                      return <div>Hello {username} / Theme = {theme}</div>
                  }}
              </UserConsumer>
             )

             }       
        </ThemeConsumer>


    )
  }
}

export default ComponentF