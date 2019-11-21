import React from 'react';
import {Route} from 'react-router-dom';

// Components for Public Routes (No Auth)
import PublicIndex from '.././components/public/PublicIndex';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

// Components for User Routes (Auth)
import PrivateRoute from './PrivateRoute';
import privateIndex from '../components/private/PrivateIndex'

// Components for Admin Routes (Auth + role type)
// Stuff goes here

export const ListOfPublicRoutes = () => {
	return (
		<div className='list_of_public_routes'>
			<Route exact path='/' component={PublicIndex} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		</div>
	);
}

export const ListOfUserRoutes = () => {
	return (
		<div className='list_of_user_routes'>
			{console.log('rendering List Of User Routes')}
			<PrivateRoute path='/game' component={privateIndex} />
		</div>
	);
}

export const ListOfAdminRoutes = () => {
	return (
		<div className='list_of_admin_routes'>

		</div>
	)
}

