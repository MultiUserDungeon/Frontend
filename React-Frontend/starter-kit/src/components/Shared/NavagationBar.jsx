import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link, NavLink} from 'react-router-dom';
import {logout} from '../../util/actions/AuthenticationActions';

function NavagationBar (props) {
	console.log('navagation bar ' + props)

	return(
		<div className='navagation_bar'>
			{ props.loggedIn ? (
				// If loggedIn === true
				<div className='private_nav'>
					<NavLink to='/' className='navlink' onClick={props.logout}> Logout </NavLink>
				</div>
			):(
				// if loggedIn === false
				<div className='public_nav'>
					Navagation Bar lives here. If youre logged in it will show something and if youre logged out youll see some buttons to log-in
					<Link to='/'> home </Link>
					<Link to='/login'> login </Link>
					<Link to='/register'> register </Link>
				</div>				
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	loggedIn: state.AuthenticationReducer.loggedIn,
})

export default withRouter(connect(mapStateToProps, {logout})(NavagationBar));