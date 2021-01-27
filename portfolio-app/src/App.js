// import modules
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { configureStore } from './store.js';

// import styles
import './App.css';

// import components
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Page from './components/pageComponents/Page.js';
import ScrollToTop from './components/pageComponents/Scroll.js';

//import createHistory from "history/createBrowserHistory";

//export const history = createHistory();

//const store = configureStore;

// history.listen((location, action) => {
//   if (action === "PUSH") {
//     window.scrollTo(0, 0);
//   }
// })

// styles for App.js
const useStyles = makeStyles((theme) => ({

}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop/>
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
              <Route exact path='/About'>
                <Page>
                  <About/>
                </Page>
              </Route>
              <Route exact path='/Contact'>
                <Page>
                  <Contact/>
                </Page>
              </Route>
            </Switch>
          <Footer/>
  </Router>
  );
}

export default App;