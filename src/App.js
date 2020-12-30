import React from 'react';
import NavBar from "./components/NavBar"
import './App.css'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  return(
      <>
        <NavBar/>

        <ItemListContainer greeting="Hola soy Kenny"/>
      
      </>


   

  )
}

export default App;
