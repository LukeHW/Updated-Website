import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import App from '../App';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Page from '../components/pageComponents/Page';
import ScrollToTop from '../components/pageComponents/Scroll';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders main message', () => {
    const router = <Router />;
    const scrollToTop = <ScrollToTop />;
    const navbar = <Navbar />;
    const routeSwitch = <Switch />;
    const route = <Route exact={true} path='/' />;
    const page = <Page />;

    expect(router).to.contain(scrollToTop);
    expect(router).to.contain(navbar);
    expect(router).to.contain(routeSwitch);
    expect(routeSwitch).to.contain(route);
    expect(route).to.contain(page);

});

  chai.use(chaiEnzyme())

})

/* <Router>
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
        <Route exact path="/About">
          <Page>
            <About />
          </Page>
        </Route>
        <Route exact path="/Contact">
          <Page>
            <Contact />
          </Page>
        </Route>
      </Switch>
      <Footer />
    </Router> */