import React, { Component } from 'react'
import { registration } from '../../util/actions/AuthenticationActions'

import {connect} from 'react-redux';

class Register extends Component {
	
	// Local state that get's set by the event handler and used on submit
	state = {
		userRegistrationInfo: {
			username: '',
			email: '',
			password1: '',
			password2: '',
		}
	}

	handleInput = (e) => {
		// we are going to set local state using setState
		this.setState({
			userRegistrationInfo:{
				// ...this.state.userRegisterationInfo creates a copy of the state everything we set the state
				// https://github.com/tc39/proposal-object-rest-spread
				// [e.target.name] is going to get the 'name' of the field we are entering text from
				// e.target.value gets the value each time we enter in data
				...this.state.userRegistrationInfo,
				[e.target.name]: e.target.value
			}
		})
	}

	handleRegister = (e) => {
		// This basically prevents the submit button from re-freshing the page
		e.preventDefault();
		// this.props.(whatever action from redux we need to use)
		this.props.registration(this.state.userRegistrationInfo)
	}

	render() { 
		return (
			<div className="registration">
				Registeration page lives here
				<form className="registration_form" onSubmit={this.handleRegister}>
					<input type="username" name="username" id="register_username" onChange={this.handleInput} />
					<input type="email" name="email" id="register_email" onChange={this.handleInput} />
					<input type="password" name="password1" id="register_password1" onChange={this.handleInput} />
					<input type="password" name="password2" id="register_password2" onChange={this.handleInput} />
					<input type="submit" name="submit" id="register_submit" onChange={this.handleRegister} />
				</form>

				<h3>{this.state.userRegistrationInfo.username}</h3>
				<h3>{this.state.userRegistrationInfo.email}</h3>
				<h3>{this.state.userRegistrationInfo.password1}</h3>
				<h3>{this.state.userRegistrationInfo.password2}</h3>
			</div>
		);
	}
}

// this will map the state to props (redux store)
const mapStateToProps = (state) => ({
	registering: state.registering
})

// connect (state to props), action's, then export the component
export default connect(mapStateToProps, {registration})(Register);