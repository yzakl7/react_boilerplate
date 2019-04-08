import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../Router/Routes";
import { AuthUserContext } from "../Session";
import SignOut from "../Login/SignOut";

class NavBar extends React.Component {
  constructor() {
    super();
    this.navBarStyle = { display: "flex", justifyContent: "space-between" };
    this.itemLinkStyle = { heigth: "100%", border:'1px red solid' };
    this.menuItemStyle = {padding:0, flexDirection:'column', alignItems:'stretch', display:'flex'}
  }
  navBar = () => {
    return (
      <ul
        className="main-menu bloque"
        style={{
          padding: 0,
          display: "flex",
          alignItems: 'flex-start'
        }}
      >
        {window.location.pathname === "/dashboard" ? (
          <Fragment>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
              <Link to={ROUTES.LANDING}> VMPR </Link>
            </li>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
              <SignOut />
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
               <Link to={ROUTES.NOSOTROS}>Nosotros</Link>
            </li>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
               <Link to={ROUTES.SERVICIOS}>Servicios</Link>
            </li>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
               <Link to={ROUTES.GALERIA}>Galería</Link>
            </li>
            <li className="main-menu-item bloque" style={this.menuItemStyle}>
               <Link to={ROUTES.CONTACTO}>Contacto</Link>
            </li>
            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? (
                  <li
                    className="main-menu-item bloque"
                    style={this.menuItemStyle}
                  >
                     <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
                  </li>
                ) : null
              }
            </AuthUserContext.Consumer>
          </Fragment>
        )}
      </ul>
    );
  };

  render = () => {
    return this.navBar();
  };
}

export default NavBar;
