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
			screenshots
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
			sessions {
				id
				progress
				testerEmail
				response {
					annotations {
						route
						message
						point {
							mouseX
							mouseY
						}
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
					}
					postQuestionnaireResponse {
						questionID
						answer
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
		}
	}
`;
