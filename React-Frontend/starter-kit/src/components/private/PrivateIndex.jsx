import React from 'react';
import {connect} from 'react-redux';

function PrivateIndex (props) {
	console.log('private index props ' + props.userData)
	return (
		<div className="private_index">
			Private Index Lives Here, This is a private page, you must have a token in local storage to see it
			{props.fuck}
		</div>
		);
}

const mapStateToProps = (state) => ({
	userData: state.AuthenticationReducer.user2
})

export default connect(mapStateToProps, {})(PrivateIndex);
