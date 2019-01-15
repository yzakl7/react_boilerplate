import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../Router/Routes';

import Navigation from '../Router';
import Dashboard from '../Dashboard';

const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route exact path={ROUTES.TEST} component={Dashboard} />
    </Fragment>
  </Router>
);

export default App;

