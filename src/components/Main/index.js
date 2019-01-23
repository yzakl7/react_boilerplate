import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Main.scss';

import * as ROUTES from '../Router/Routes';

import Navigation from '../Router';
import Dashboard from '../Dashboard';
import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';

import { withAuthentication } from '../Session';
import Landing from '../Landing';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation/>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        </Fragment>
      </Router>
    );
  }
}

export default withAuthentication(Main);
