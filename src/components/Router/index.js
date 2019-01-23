import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Routes';
import { AuthUserContext } from '../Session';
import SignOut from '../Login/SignOut';

const authNav = () => (
  <ul>
    { window.location.pathname === '/signin' || window.location.pathname === '/signup'
    ?
      <Fragment>
      </Fragment>
    :
      <Fragment>
        <li>
          <Link to={ROUTES.SIGN_IN}>sign in</Link>
        </li>
      </Fragment>
    }
  </ul>
)

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser
      ?
      <Fragment>
        <SignOut/>
      </Fragment>
      :

        authNav()

      }
    </AuthUserContext.Consumer>
  </div>
);

export default Navigation;