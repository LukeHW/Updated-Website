// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import styles
import './App.css';

// import components
import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js'

// styles for App.js
const useStyles = makeStyles((theme) => ({

}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
          <Navbar/>
          <Main/>
          <Footer/>
    </div>
  );
}

export default App;