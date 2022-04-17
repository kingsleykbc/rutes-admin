import { gql } from 'apollo-boost';

// ===================================================================================================================
//  QUERIES
// ===================================================================================================================

// Get all projects
export const getProjectsQuery = gql`
	{
		projects {
			title
			description
			projectKey
			sessions {
				id
				progress
			}
		}
	}
`;

export const getProjectQuery = gql`
	query ($projectId: ID!) {
		project(id: $projectId) {
			
		}
	}
`;

// ===================================================================================================================
//  MUTATIONS
// ===================================================================================================================

export const addBookMutation = gql`
	mutation ($name: String!, $genre: String!, $authorID: ID!) {
		addBook(name: $name, genre: $genre, authorID: $authorID) {
			name
			id
		}
	}
`;
