import React, { useEffect } from 'react';
import Button from '../UI/Button';
import Section from '../UI/Section';
import { useQuery } from '@apollo/client';
import ProjectListItem from './ProjectsComponents/ProjectListItem';
import { getProjectsQuery } from '../../graphql/queries/projects';
import LoadablePage from '../UI/LoadablePage';
import { HiOutlineBeaker as IcProject } from 'react-icons/hi';

import { getProjectsFormatter } from '../../graphql/formatters/projects';
import { useSearch } from '../../contexts/SearchContext';
import EmptySet from '../UI/EmptySet';

/**
 * PROJECT LIST
 */
const Projects = () => {
	const { keyword } = useSearch();
	const { data, error, loading, refetch } = useQuery(getProjectsQuery, { variables: { keyword } });

	// Refresh projects on page load
	useEffect(() => {
		refetch();
	}, []);

	// Loading or error page
	if (error || loading) return <LoadablePage states={{ error, loading }} />;

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<Section
			title='Projects'
			padding='0 20px 20px 20px'
			sideContent={
				<Button filled={data.projects.length === 0} linkHref='/addproject'>
					Add Project
				</Button>
			}
		>
			{data.projects.length === 0 && (
				<EmptySet height='250px' margin='30px 0' icon={<IcProject />}>
					No projects added
				</EmptySet>
			)}

			{getProjectsFormatter(data).map((item, index) => (
				<ProjectListItem key={item.id} data={item} />
			))}
		</Section>
	);
};

export default Projects;
