import React from 'react';
import './Login.scss';
import { FirebaseContext } from '../Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends React.Component {
  constructor() {
    super()
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event, firebase) => {
    const { email, password } = this.state;

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        // this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
    console.log(firebase);
    console.log(firebase.auth);
  };


  render() {
    const {
      email,
      password,
      error
    } = this.state;
    return (
      <div className="sign-in">
        <FirebaseContext.Consumer>
          {firebase =>
            <form onSubmit={e => this.onSubmit(e, firebase)}>
            {console.log(firebase.auth)}
              <label htmlFor="">
                Email:
                <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                />
              </label>
              <label htmlFor="">
                Password:
                <input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
              </label>
              <button type="submit">Sign Up</button>
              {error && <p>{error.message}</p>}
            </form>
          }
        </FirebaseContext.Consumer>
      </div>
    )
  }
};
export default SignIn;