import React, { Component } from 'react'
import './App.css';
import ComponentC from './components/ComponentC';
import { ThemeProvider } from './components/themeContext';
import { UserProvider } from './components/userContext';


class App extends Component {
  
     render(){
          return (
               
     <div className='App'>
          <ThemeProvider value="New Theme">
          <UserProvider value="ThuNDeR">
               <ComponentC />
          </UserProvider>
          </ThemeProvider>
     </div> 
          )
     }
     /* 
           <ClickCounterTwo />
          <HoverCounterTwo />
          <User render={(isLoggedIn)=>isLoggedIn?"ThuNDeR":"Guest"} />
     */
      /*
  <Count render={(count,incrementCount)=>(
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
        />
          <Count render={(count,incrementCount)=>(
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} 
        /> 
     */
    /*
                         <Count>
          {(count,incrementCount)=>(
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
          </Count>
           <Count>
          {(count,incrementCount)=>(
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} 
          </Count>
    */
  
}

export default App;
