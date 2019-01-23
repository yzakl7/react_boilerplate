import React from 'react';

import withAuthorization from '../Session/withAuthorization';
import { AuthUserContext } from '../Session';

class Dashboard extends React.Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{authUser => (
					<div>
						<h1>Account: {authUser.email}</h1>
						{console.log(authUser)}
					</div>
				)}
			</AuthUserContext.Consumer>
		)
	}
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);