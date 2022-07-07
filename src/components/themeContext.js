import React from "react";


const ThemeContext = React.createContext('None')
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

export{ThemeProvider,ThemeConsumer} 
export default ThemeContext