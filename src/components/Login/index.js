import React from 'react';
import './Login.scss';
import SignIn from './SignIn';

class LogIn extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    
    console.log(e)
    return(null)
  }

  render() {
    return (
      <SignIn handleOnSubmit={this.onSubmit}/>
    )
  }
};
export default LogIn;