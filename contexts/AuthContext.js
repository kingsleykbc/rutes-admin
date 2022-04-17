import React, { useEffect, createContext, useContext, useState } from 'react';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
import { loginAction } from '../graphql/queries/auth';
import { useMutation } from '@apollo/client';

const AuthContext = createContext({ user: null, login: () => {}, logout: () => {}, authReady: false });

export const useAuth = () => {
	return useContext(AuthContext);
};

/**
 * HANDLE AUTHENTICATION
 */
export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authReady, setAuthReady] = useState(false);
	const [handleLogin] = useMutation(loginAction);

	/**
	 * ON COMPONENT LOAD, GET USER DATA
	 */
	useEffect(() => {
		getUser();
	}, []);

	/**
	 * GET USER DATA
	 */
	const getUserData = async token => {
		// If you want to get userData from backend, do it here
		const userData = jwt.decode(token, process.env.NEXT_JWT_SECRET);
		return userData;
	};

	/**
	 * GET USER DATA
	 */
	const getUser = async () => {
		const token = cookie.get('rutes-frontend-token');

		// If user not logged in
		if (!token) {
			setAuthReady(true);
			Router.push('/login');
			return;
		}
		const userData = await getUserData(token);
		setUser({ ...userData, token });
		setAuthReady(true);
	};

	/**
	 * HANDLE LOGIN
	 */
	const login = async (email, password) => {
		try {
			// HANDLE BACKEND LOGIN HERE
			const {
				data: { login: token }
			} = await handleLogin({ variables: { loginData: { email, password } } });

			cookie.set('rutes-frontend-token', token);
			const userData = await getUserData(token);
			setUser({ ...userData, token });
			Router.push('/');
		} catch (e) {
			throw e;
		}
	};

	/**
	 * HANDLE LOGOUT
	 */
	const logout = () => {
		Router.push('/login');
		cookie.remove('rutes-frontend-token');
		setUser(null);
	};

	const data = { user, authReady, login, logout, getUser };
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
