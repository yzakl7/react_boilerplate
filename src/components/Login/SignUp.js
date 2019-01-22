import React from 'react';
import './Login.scss';
import { FirebaseContext } from '../../api';


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends React.Component {
  state={...INITIAL_STATE}
  onSubmit = (event, firebase) => {
    event.preventDefault();
    
    console.log(event)
    const { username, email, passwordOne } = this.state;
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser)
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error });
        console.log(error)
      });

  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <FirebaseContext.Consumer>
        {firebase =>(
          <div className="sign-in">
            <form onSubmit={e => this.onSubmit(e ,firebase)}>
              <h2>Sign Up</h2>
                <label htmlFor="">
                  Username:
                  <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                  />
                </label>
                <label htmlFor="">
                  e-Mail:
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
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                  />
                </label>
                <label htmlFor="">
                  Repeat password:
                  <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"   
                    placeholder="Confirm Password"
                  />
                </label>
                {error && <p>{error.message}</p>}
                <input disabled={isInvalid} type="submit" value="send"/>
              </form>
          </div>  
        )}

      </FirebaseContext.Consumer>

    )
  }
};
export default SignUp;