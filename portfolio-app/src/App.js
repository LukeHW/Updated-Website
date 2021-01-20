// import modules
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import styles
import './App.css';

// import components
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Work from './components/Work.js';
import Footer from './components/Footer.js';
import Page from './components/pageComponents/Page.js';
import ScrollToTop from './components/pageComponents/Scroll.js';

// styles for App.js
const useStyles = makeStyles((theme) => ({

}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Page>
                <Main/>
              </Page>
            </Route>
            <Route exact path='/Work'>
              <Page>
                <Work/>
              </Page>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;