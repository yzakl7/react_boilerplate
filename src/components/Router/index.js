import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Routes';
import { AuthUserContext } from '../Session';
import SignOut from '../Login/SignOut';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser
      ?
      <Fragment>
        <p>Logged in!</p>
        <SignOut/>
      </Fragment>
      :
        <ul>
          { window.location.pathname === '/signin'
          ?
            <Fragment>
              <li>
                <Link to={ROUTES.ROOT}>Return</Link>
              </li>
              <li>
                No sign in?, <Link to={ROUTES.SIGN_UP}>Sign up</Link>
              </li>
            </Fragment>
          :
            <Fragment>
              <li>
                <Link to={ROUTES.ROOT}>Default</Link>
              </li>
              <li>
                <Link to={ROUTES.SIGN_IN}>sign in</Link>
              </li>
            </Fragment>
          }
        </ul>


      }
    </AuthUserContext.Consumer>
  </div>
);

export default Navigation;