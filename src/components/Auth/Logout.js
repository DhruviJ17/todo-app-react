import React, { useEffect } from 'react';
import axiosInstance from '../Axios';
// import { useHistory } from 'react-router-dom';

function Logout() {
	// const history = useHistory();
	useEffect(() => {
		const response = axiosInstance.post('logout/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
	});
	return <div>Logout</div>;
}

export default Logout