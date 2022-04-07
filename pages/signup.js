import React from 'react';
import LoginLayout from '../components/LoginLayout';
import SignUp from '../components/SignUp';

const login = () => {
	return (
		<LoginLayout>
			<SignUp />
		</LoginLayout>
	);
};

export default login;
