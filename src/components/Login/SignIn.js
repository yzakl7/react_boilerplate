import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase, FirebaseContext } from '../../api';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
  

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
    
      onSubmit = (event, firebase) => {
        const { email, password } = this.state;
        console.log(firebase)
        firebase
          .doSignInWithEmailAndPassword(email, password)
          .then((d) => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/');
            console.log(d)
          })
          .catch(error => {
            this.setState({ error });
            console.log(error)
          });
    
        event.preventDefault();
      };
    
      onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <FirebaseContext.Consumer>
                {firebase => (<div className="sign-in">
                    <form onSubmit={e => this.onSubmit(e, firebase)}>
                        <h2>Sign In</h2>
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
                        {error && <p>{error.message}</p>}
                        <input disabled={isInvalid} type="submit" value="send"/>
                        
                    </form>
                </div>)}
            </FirebaseContext.Consumer>
        )
    }
};

const SignInForm = compose(
    withRouter,
    withFirebase,
  )(SignInForm);

export default SignIn;