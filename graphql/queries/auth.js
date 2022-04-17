import { gql } from '@apollo/client';

export const projectsQuery = gql`
	query {
		projects {
			title
		}
	}
`;

export const loginAction = gql`
	mutation ($loginData: LoginData!) {
		login(loginData: $loginData)
	}
`;

export const signUpAction = gql`
	mutation ($adminData: AdminSignUpData!) {
		signUp(adminData: $adminData) {
			email
			password
		}
	}
`;
