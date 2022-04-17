import React from 'react';
import Button from '../UI/Button';
import Section from '../UI/Section';
import { useQuery } from '@apollo/client';
import { projects } from '../../dummybase';
import ProjectListItem from './ProjectsComponents/ProjectListItem';
import { getProjectsQuery } from '../../graphql/queries/projects';
import LoadablePage from '../UI/LoadablePage';
import { getProjectsFormatter } from '../../graphql/formatters/projects';
import { useSearch } from '../../contexts/SearchContext';

const Projects = () => {
	const { keyword } = useSearch();
	const { data, error, loading } = useQuery(getProjectsQuery, { variables: { keyword } });

	if (error || loading) return <LoadablePage states={{ error, loading }} />;
	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<Section title='Projects' padding='0 20px 20px 20px' sideContent={<Button linkHref='/addproject'>Add Project</Button>}>
			{/* PROJECTS LIST */}
			{getProjectsFormatter(data).map((item, index) => (
				<ProjectListItem key={item.id} data={item} />
			))}
		</Section>
	);
};

export default Projects;
