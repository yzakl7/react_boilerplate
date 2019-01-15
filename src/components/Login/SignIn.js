import React from 'react';
import './Login.scss';

class SignIn extends React.Component {
    render() {
        return (
            <div className="sign-in">
                <form>
                    <label htmlFor="">
                        Username:
                        <input type="text"/>
                    </label>
                    <label htmlFor="">
                        Password:
                        <input type="password"/>
                    </label>
                </form>
            </div>
        )
    }
};
export default SignIn;