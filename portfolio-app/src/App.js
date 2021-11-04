/* eslint-disable react/jsx-filename-extension */
// import modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles
import './App.css';

// import pages
import Main from './components/Main';
import Work from './components/Work';
import Gallery from './components/Gallery';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page from './components/pageComponents/Page';
import ScrollToTop from './components/pageComponents/Scroll';

// styles for App.js
const useStyles = makeStyles(() => ({

}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Page>
            <Main />
          </Page>
        </Route>
        <Route exact path="/Work">
          <Page>
            <Work />
          </Page>
        </Route>
        <Route exact path="/Gallery">
            <Gallery />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
