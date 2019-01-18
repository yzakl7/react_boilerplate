import React from 'react';
import './Login.scss';
import { FirebaseContext } from '../Firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event, firebase) => {
    const { username, email, passwordOne } = this.state;

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/');
        console.log(authUser);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return (
      <div className="sign-in">
        <FirebaseContext.Consumer>
            { firebase =>
              <form onSubmit={e => this.onSubmit(e, firebase)}>
                <input
                  name="username"
                  value={username}
                  onChange={e => this.onChange(e)}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
                <input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password"
                />
                <button type="submit">Sign Up</button>
                {error && <p>{error.message}</p>}
              </form>
            }
        </FirebaseContext.Consumer>
      </div>
    )
  }
};
export default SignUp;