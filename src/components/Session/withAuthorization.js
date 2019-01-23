// import React from 'react';

// const withAuthorization = () => Component => {
//   class WithAuthorization extends React.Component {
//     render() {
//       return <Component {...this.props} />;
//     }
//   }

//   return WithAuthorization;
// };vv

// export default withAuthorization;

import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './Context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../Router/Routes'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          console.log(authUser);
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;
