import React from 'react';
import './Login.scss';
import { FirebaseContext } from '../Firebase';

class SignIn extends React.Component {
  render() {
    return (
      <div className="sign-in">
        <FirebaseContext.Consumer>
          {firebase =>
            <form>
            {console.log(firebase.auth)}
              <label htmlFor="">
                Username:
                <input type="text"/>
              </label>
              <label htmlFor="">
                Password:
                <input type="password"/>
              </label>
            </form>
          }

        </FirebaseContext.Consumer>

      </div>
    )
  }
};
export default SignIn;