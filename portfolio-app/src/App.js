// import modules
import * as React from 'react';

// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './components/pageComponents/Loading.jsx';

// import styles
import './App.css';

// import components
const Navbar = React.lazy(() => import('./components/Navbar'))
const Footer = React.lazy(() => import('./components/Footer'))
const ScrollToTop = React.lazy(() => import('./components/pageComponents/Scroll'))

// import pages
const Main = React.lazy(() => import('./components/Main'))
const Work = React.lazy(() => import('./components/Work'))
const Gallery = React.lazy(() => import('./components/Gallery'))

// styles for App.js
// const useStyles = makeStyles(() => ({

// }));

function App() {

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // const classes = useStyles();

  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Navbar />
        <Switch>
            <Route exact path={"/"}>
                <Main />
            </Route>
            <Route exact path={"/Work"}>
                <Work />
            </Route>
            <Route exact path={"/Gallery"}>
                <Gallery />
            </Route>
            <Route exact path={"/Loading"}>
                <Loading />
            </Route>
        </Switch>
        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default App;
