import React from 'react';
import Button from '../UI/Button';
import Section from '../UI/Section';
import { projects } from '../../dummybase';
import ProjectListItem from './ProjectsComponents/ProjectListItem';

const Projects = () => {
	const projectWidgets = projects.map((item, index) => <ProjectListItem key={item._id} data={item} />);

	return (
		<div className='Projects'>
			<Section title='Projects' padding='0 20px 20px 20px' sideContent={<Button linkHref='/addproject'>Add Project</Button>}>
				{/* PROJECTS LIST */}
				{projectWidgets}
			</Section>
		</div>
	);
};

export default Projects;
