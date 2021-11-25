/* eslint-disable react/jsx-filename-extension */
// import modules
import { useState } from 'react';
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import styles
import './App.css';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/pageComponents/Scroll';

// import pages
const Main = React.lazy(() => import('./components/Main'))
const Work = React.lazy(() => import('./components/Work'))
const Gallery = React.lazy(() => import('./components/Gallery'))

// styles for App.js
const useStyles = makeStyles(() => ({

}));

function App() {

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <React.Suspense fallback={<p>Loading</p>}>
          <Route exact path="/">
              <Main />
          </Route>
          <Route exact path="/Work">
              <Work />
          </Route>
          <Route exact path="/Gallery">
              <Gallery />
          </Route>
        </React.Suspense>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
