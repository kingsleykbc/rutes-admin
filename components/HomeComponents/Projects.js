import React, { useEffect } from 'react';
import Button from '../UI/Button';
import Section from '../UI/Section';
import { useQuery } from '@apollo/client';
import ProjectListItem from './ProjectsComponents/ProjectListItem';
import { getProjectsQuery } from '../../graphql/queries/projects';
import LoadablePage from '../UI/LoadablePage';
import { getProjectsFormatter } from '../../graphql/formatters/projects';
import { useSearch } from '../../contexts/SearchContext';

/**
 * PROJECT LIST
 */
const Projects = () => {
	const { keyword } = useSearch();
	const { data, error, loading, refetch } = useQuery(getProjectsQuery, { variables: { keyword } });

	useEffect(() => {
		// Refresh projects on page load
		refetch();
	}, []);

	if (error || loading) return <LoadablePage states={{ error, loading }} />;
	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<Section title='Projects' padding='0 20px 20px 20px' sideContent={<Button linkHref='/addproject'>Add Project</Button>}>
			{getProjectsFormatter(data).map((item, index) => (
				<ProjectListItem key={item.id} data={item} />
			))}
		</Section>
	);
};

export default Projects;
