import React, { useState } from 'react';
import Button from './UI/Button';
import Container from './UI/Container';
import { useAuth } from '../contexts/AuthContext';
import { HighlightedText } from './UI/TextComponents';
import PageDivider from './UI/PageDivider';

/**
 * LOGIN
 */
const Login = () => {
	const { login } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * HANDLE LOGIN
	 */
	const handleLogin = async e => {
		setIsLoading(true);
		e.preventDefault();
		try {
			await login(email, password);
		} catch (e) {
			setError(e.message.includes('User not found') ? 'Invalid credentials' : e.message);
		}
		setIsLoading(false);
	};

	/**
	 * PREFILL LOGIN FORM
	 */
	const handlePrefill = () => {
		setEmail('john.doe@example.com');
		setPassword('password123');
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<form onSubmit={handleLogin}>
			{/* LOGIN FORM */}
			<div className='formField'>
				<h4>Email</h4>
				<input type='text' value={email} required placeholder='john@example.com' onChange={e => setEmail(e.target.value)} />
			</div>
			<div className='formField'>
				<h4>Password</h4>
				<input type='password' value={password} required onChange={e => setPassword(e.target.value)} />
			</div>
			<Container>
				<Button loading={isLoading} filled>
					Login
				</Button>
			</Container>
			{error && (
				<HighlightedText type='danger' width='100%'>
					{error}
				</HighlightedText>
			)}

			{/* PRE-FILL LOGIN FORM */}
			<Container align='center'>
				<PageDivider labelPosition='center'>OR</PageDivider>
				<div className='prefill' onClick={handlePrefill}>
					<HighlightedText margin='20px 0 0 0'>Pre-fill test credentials</HighlightedText>
				</div>
			</Container>

			{/* STYLE */}
			<style jsx>{`
				.prefill {
					cursor: pointer;
					display: inline-block;
				}
				.prefill:hover {
					opacity: 0.6;
				}
			`}</style>
		</form>
	);
};

export default Login;
