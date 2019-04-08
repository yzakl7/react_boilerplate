import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "./Routes";
import { AuthUserContext } from "../Session";
import SignOut from "../Login/SignOut";

const authNav = () => (
  <ul>
    {window.location.pathname === "/signin"  ? (
      <Fragment />
    ) : (
      <Fragment>
        <li>
          <Link to={ROUTES.NOSOTROS}>Nosotros</Link>
        </li>
        <li>
          <Link to={ROUTES.SERVICIOS}>Servicios</Link>
        </li>
        <li>
          <Link to={ROUTES.GALERIA}>Galería</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACTO}>Contacto</Link>
        </li>
      </Fragment>
    )}
  </ul>
);

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <Fragment>
            <SignOut />
          </Fragment>
        ) : (
          authNav()
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

export default Navigation;
