import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.ROOT}>Default</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>sign in</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;