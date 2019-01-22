import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Routes';
import './Router.scss'

const Navigation = (props) => (
  <div>
    {/* {console.log(props.getRoute)} */}
    {
      // props.getRoute('dsf')
    }
    <ul className="main-menu">
      {
        window.location.pathname === '/signin'
        ? <Fragment>
            <li>
              <Link to={ROUTES.ROOT}>Landing</Link>
            </li>
            <li>
              Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
          </Fragment>
        : <Fragment>
            <li>
              <Link to={ROUTES.ROOT}>Landing</Link>
            </li>
            <li>
              <Link to={ROUTES.SIGN_IN}>sign in</Link>
            </li>
          </Fragment>
      }
    </ul>
  </div>
);

export default Navigation;