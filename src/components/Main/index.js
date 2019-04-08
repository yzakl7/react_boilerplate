import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Main.scss";

import * as ROUTES from "../Router/Routes";

import NavBar from "../Common/NavBar";
import Dashboard from "../Dashboard";
import SignIn from "../Login/SignIn";

import { withAuthentication } from "../Session";
import Landing from "../Landing";
import Nosotros from "../Nosotros";
import Servicios from "../Servicios";
import Galeria from "../Galeria";
import Contacto from "../Contacto";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
    this.setState({ menuState: "closed" });
  }
  handleMenuButtonClick = value => {
    this.setState({ menuState: value ? "opened" : "closed" });
    return null;
  };
  render() {
    return (
      <div className="main-frame bloque" style={{ margin: 0, padding: 0 }}>
        <Router>
          <div
            className={`layout bloque ${this.state.menuState}`}
            style={{ padding: 0 }}
          >
            <NavBar onButtonClick={this.handleMenuButtonClick} />
            <div
              className={"content-wrapper bloque"}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 0
              }}
            >
              <div className="mobile-top-bar bloque">
                <label for="menu-trigger">
                  <i className="material-icons menu-icon">
                    {this.state.menuState === "opened" ? "close" : "menu"}
                  </i>
                  {/* {this.state.menuState === "opened" ? (
                    <i className="material-icons">menu</i>
                  ) : (
                      <i className="material-icons">close</i>
                    )} */}
                </label>
                <input
                  id="menu-trigger"
                  type="checkbox"
                  style={{ position: "absolute", visibility: "hidden" }}
                  onChange={e => this.handleMenuButtonClick(e.target.checked)}
                />
              </div>
              <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
              <Route exact path={ROUTES.NOSOTROS} component={Nosotros} />
              <Route exact path={ROUTES.SERVICIOS} component={Servicios} />
              <Route exact path={ROUTES.GALERIA} component={Galeria} />
              <Route exact path={ROUTES.CONTACTO} component={Contacto} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withAuthentication(Main);
