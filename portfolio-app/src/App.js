// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// import styles
import './App.css';

// import components
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Work from './components/Work.js';
import Footer from './components/Footer.js';
import Page from './components/pageComponents/Page.js';

// styles for App.js
const useStyles = makeStyles((theme) => ({

}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
          <Navbar/>
          <Page>
            <Main/>
          </Page>
          <Footer/>
    </div>
  );
}

export default App;