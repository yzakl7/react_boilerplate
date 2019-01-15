import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Main.scss';

import * as ROUTES from '../Router/Routes';

import Navigation from '../Router';
import Dashboard from '../Dashboard';
import SignIn from '../Login/SignIn';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Navigation />
            <Route exact path={ROUTES.ROOT} component={Dashboard} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default Main;
