import React from 'react'
import './App.css';
import Parent from './components/Parent'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import  './appStyles.css'
import styles from  './appStyles.module.css'
import Counter from './components/Counter';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


function App() {
  return (

     <div className='App'>
                <LifeCycleA />

     </div> 
    );
}

export default App;
