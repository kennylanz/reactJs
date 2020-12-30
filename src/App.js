import React from 'react';
import NavBar from "./components/NavBar"
import './App.css';

const App = () => {

  return(
      <>
        <NavBar saludo="bienvenidos"/>

        <ItemListContainer greeting="Hola soy Kenny"/>
      
      </>


   

  )
}

export default App;
