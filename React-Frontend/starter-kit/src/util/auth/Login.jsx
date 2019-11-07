import React, {Component} from 'react';
import {connect} from 'react-redux';

// This Login component handles user input and saves it to a local state, on submit it will update the global redux state tree which handles the API call

class Login extends Component {
	// Here we set a local state to be used onSubmit
	state = {
		userLoginInfo: {
			emailOrUsername: '',
			password: '',
		}
	}

	// function that takes in parameters as 'e'
	handleInput = (e) => {
		// we are going to need to set local state
		this.setState({
			userLoginInfo: {
				// ...this.state.userLoginInfo creates a copy of the state everything we set the state
				// https://github.com/tc39/proposal-object-rest-spread
				// [e.target.name] is going to get the 'name' of the field we are entering text from
				// e.target.value gets the value each time we enter in data
				...this.state.userLoginInfo,
				[e.target.name]: e.target.value
			}
		})
	}

	handleEmailOrUsername = () => {
		// This basically checks to see if the value for emailOrUsername (in local state) contains "@", if it does it does something
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
		if(Object.values(this.state.userLoginInfo.emailOrUsername).includes("@") === true ){
			// since the value contains an "@" we need to return email & password
			return {
				email: this.state.userLoginInfo.emailOrUsername,
				password: this.state.userLoginInfo.password
			}
		} else {
			// if not we return username & password
			return{
				username: this.state.userLoginInfo.emailOrUsername,
				password: this.state.userLoginInfo.password,
			}
		}
	}

	render(){
		return (
			<div className="login">
				Login Page lives here
				<form action="">
					<input type="text" name="emailOrUsername" id="" onChange={this.handleInput} />
					<input type="password" name="password" id="" onChange={this.handleInput} />
					<input type="submit" name="submit" id="" onClick={this.handleSubmit} />

				</form>
				<h3>{this.state.userLoginInfo.emailOrUsername}</h3>
				<h3>{this.state.userLoginInfo.password}</h3>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggingIn: state.loggingIn,
	error: state.loggingIn,
})


export default connect(mapStateToProps, {})(Login);
