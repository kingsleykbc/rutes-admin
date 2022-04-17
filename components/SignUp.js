import React, { useState } from 'react';
import Button from './UI/Button';
import Container from './UI/Container';
import { useAuth } from '../contexts/AuthContext';
import { HighlightedText } from './UI/TextComponents';
import { signUpAction } from '../graphql/queries/auth';
import { useMutation } from '@apollo/client';

const SignUp = () => {
	const { login } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [signUp] = useMutation(signUpAction);

	/**
	 * HANDLE SIGN UP
	 */
	const handleSignUp = async e => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await signUp({ variables: { adminData: { email, password, fullName } } });
			await login(email, password);
		} catch (e) {
			const msg = e.message;
			setError(msg.includes('duplicate key error') && msg.includes('email') ? 'Email already taken' : msg);
		}
		setIsLoading(false);
	};

	// ================================================================================================================
	//  UI
	// ================================================================================================================
	return (
		<form onSubmit={handleSignUp}>
			<div className='formField'>
				<h4>Full name</h4>
				<input required type='text' placeholder='John doe' onChange={e => setFullName(e.target.value)} />
			</div>
			<div className='formField'>
				<h4>Email</h4>
				<input required type='text' placeholder='john@example.com' onChange={e => setEmail(e.target.value)} />
			</div>
			<div className='formField'>
				<h4>Password</h4>
				<input required type='password' name='' id='' onChange={e => setPassword(e.target.value)} />
			</div>
			<Container>
				<Button loading={isLoading} filled>
					Sign up
				</Button>
			</Container>
			{error && (
				<HighlightedText type='danger' width='100%'>
					{error}
				</HighlightedText>
			)}
		</form>
	);
};

export default SignUp;
