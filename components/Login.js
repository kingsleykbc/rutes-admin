import React, { useState } from 'react';
import Button from './UI/Button';
import Container from './UI/Container';
import { useAuth } from '../contexts/AuthContext';
import { HighlightedText } from './UI/TextComponents';

const Login = () => {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	/**
	 * HANDLE LOGIN
	 */
	const handleLogin = async e => {
		e.preventDefault();
		try {
			await login(email, password);
		} catch (e) {
			setError(e.message.includes('User not found') ? 'Invalid credentials' : e.message);
		}
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<form onSubmit={handleLogin}>
			<div className='formField'>
				<h4>Email</h4>
				<input type='text' required placeholder='john@example.com' onChange={e => setEmail(e.target.value)} />
			</div>
			<div className='formField'>
				<h4>Password</h4>
				<input type='password' required onChange={e => setPassword(e.target.value)} />
			</div>
			<Container>
				<Button filled>Login</Button>
			</Container>
			{error && (
				<HighlightedText type='danger' width='100%'>
					{error}
				</HighlightedText>
			)}
		</form>
	);
};

export default Login;
