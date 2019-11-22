import React, {Component} from 'react';
import {connect} from 'react-redux';

import {current_room} from '../../util/actions/UserActions';

class PrivateIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}

	componentDidMount() {
		console.log('private index is mounted ' + this.props.userData)
		// this triggers the UserAction's (current_room) which gets information for the user
		this.props.current_room();
	}

	render() { 
		return (
			<div className="private_index">
				super private stuff B, you must be logged in ehh?
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	userData: state.AuthenticationReducer.user2
})

export default connect(mapStateToProps, {current_room})(PrivateIndex);
