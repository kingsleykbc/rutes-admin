import { gql } from '@apollo/client';

// ===================================================================================================================
//  QUERIES
// ===================================================================================================================

// Get all projects
export const getProjectsQuery = gql`
	query ($keyword: String) {
		projects(keyword: $keyword) {
			id
			title
			description
			projectKey
			url
			sessions {
				id
				progress
			}
		}
	}
`;

export const getProjectQuery = gql`
	query ($projectKey: String!) {
		project(projectKey: $projectKey) {
			id
			title
			description
			projectKey
			url
			screenshots {
				id
				device
				route
				screenshot
			}
			tests {
				id
				route
				fullRoute
				instructions
			}
			preQuestionnaire {
				id
				type
				question
				options
			}
			postQuestionnaire {
				id
				type
				question
				options
			}
			approvedTesters
			sessions {
				id
				progress
				testerEmail
				response {
					annotations {
						id
						route
						message
						point {
							mouseX
							mouseY
						}
						device
						element {
							tag
						}
						createdAt
					}
					recordings {
						route
						recording
					}
					feedback {
						id
						title
						type
						message
						createdAt
					}
					completedTests
					preQuestionnaireResponse {
						questionID
						answer
						createdAt
					}
					postQuestionnaireResponse {
						questionID
						answer
						createdAt
					}
				}
				createdAt
				updatedAt
			}
		}
	}
`;

// ===================================================================================================================
//  MUTATIONS
// ===================================================================================================================

export const createProjectAction = gql`
	mutation ($projectData: ProjectData!) {
		createProject(projectData: $projectData) {
			id
			projectKey
		}
	}
`;
