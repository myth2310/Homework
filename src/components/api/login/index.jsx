import React from 'react';
import './login.css';

const Login = () => {
	const generateRandomString = (length) => {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	const handleLogin = (e) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var client_id = 'a43d691e54a04cd6991b32ccae36403a';
		var redirect_uri = 'http://localhost:3000';

		var state = generateRandomString(16);

		localStorage.setItem(stateKey, state);
		var scope = 'user-read-private user-read-email';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	};

	return (
		<div className="login-container">
			<h1 size="title">Login</h1>
			<div onClick={(e) => handleLogin(e)} className="button">
				Login disini
			</div>
		</div>
	);
};

export default Login;
