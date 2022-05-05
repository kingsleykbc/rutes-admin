import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { createProjectAction } from '../graphql/queries/projects';
import QuestionnaireInput from './AddProjectComponents/QuestionnaireInput';
import TestsInput from './AddProjectComponents/TestsInput';
import Button from './UI/Button';
import Container from './UI/Container';
import MultiTextInput from './UI/MultiTextInput';
import Section from './UI/Section';
import { HighlightedText } from './UI/TextComponents';
import Router from 'next/router';

/**
 * ADD PROJECT FORM
 */
const AddProject = () => {
	const [addProject] = useMutation(createProjectAction);

	// States
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Form
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [url, setUrl] = useState('');
	const [tests, setTests] = useState([]);
	const [preQuestionnaire, setPreQuestionnaire] = useState([]);
	const [postQuestionnaire, setPostQuestionnaire] = useState([]);
	const [approvedTesters, setApprovedTesters] = useState([]);

	// Delete test
	const handleTestDelete = ind => {
		setTests(tests.filter((item, index) => ind != index));
	};

	// Delete question
	const handleQuestionDelete = (ind, type) => {
		if (type === 'post') setPostQuestionnaire(postQuestionnaire.filter((item, index) => ind != index));
		setPreQuestionnaire(preQuestionnaire.filter((item, index) => ind != index));
	};

	/**
	 * VALIDATE FORM
	 */
	const validateForm = () => {
		// Check inputs
		const inputs = document.querySelectorAll('#AddProject input, #AddProject textarea');
		for (let i = 0; i < inputs.length; i++) {
			let item = inputs[i];
			if (!item.checkValidity() && !item.className.includes('MultiTextInputForm')) {
				console.log(item.className);
				return `The ${item.name} field is Invalid`;
			}
		}

		// Check Tests and approved testers
		if (tests.length === 0) return 'Please enter at least one test set';
		if (approvedTesters.length === 0) return 'Please enter at least one approved tester';
	};

	/**
	 * PUBLISH THE PROJECT
	 */
	const handleAddProject = async () => {
		setError('');
		setIsLoading(true);
		try {
			// Validate form
			const error = validateForm();
			if (error) throw new Error(error);

			// Setup data
			const projectData = {
				title,
				description,
				tests,
				preQuestionnaire,
				postQuestionnaire,
				url,
				approvedTesters
			};

			// Add project
			const data = await addProject({ variables: { projectData } });

			// Back to home screen
			Router.push(`/view/${data.data.createProject.projectKey}/details`);
		} catch (e) {
			console.log(e.networkError.result.errors.map(item => item.message));
			setError(e.message);
		}
		setIsLoading(false);
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div id='AddProject'>
			<Section padding='20px 20px 80px 20px' title='Add Project'>
				{/* TITLE */}
				<div className='formField'>
					<h4>Project title</h4>
					<input type='text' name='Title' value={title} required placeholder='Project title' onChange={e => setTitle(e.target.value)} />
				</div>

				{/* DESCRIPTION */}
				<div className='formField'>
					<h4>Project description</h4>
					<textarea
						type='text'
						value={description}
						name='Description'
						required
						placeholder='Project description'
						onChange={e => setDescription(e.target.value)}
					/>
				</div>

				{/* URL */}
				<div className='formField'>
					<h4>URL</h4>
					<input type='url' value={url} name='URL' required placeholder='https://example.com' onChange={e => setUrl(e.target.value)} />
				</div>

				{/* TESTS */}
				<TestsInput data={tests} onChange={setTests} url={url} onDelete={handleTestDelete} />

				{/* PRE AND POST-QUESTIONNAIRE */}
				<QuestionnaireInput data={preQuestionnaire} onChange={setPreQuestionnaire} onDelete={handleQuestionDelete} />
				<QuestionnaireInput
					type='Post'
					data={postQuestionnaire}
					onChange={setPostQuestionnaire}
					onDelete={data => handleQuestionDelete(data, 'post')}
				/>

				{/* APPROVED TESTERS */}
				<div className='formField'>
					<h4>Approved testers</h4>
					<MultiTextInput
						itemPrefix='Tester email'
						placeholder='No tester added'
						value={approvedTesters}
						type='email'
						onChange={setApprovedTesters}
					/>
				</div>

				<Container hasBorder borderDirections='t' padding='20px 0' margin='20px 0' align='center'>
					{error && (
						<HighlightedText display='block' margin='0 0 20px 0' type='danger'>
							{error}
						</HighlightedText>
					)}
					<Button loading={isLoading} onClick={handleAddProject} filled>
						Add Project
					</Button>
				</Container>
			</Section>
		</div>
	);
};

export default AddProject;
