import { useState } from 'react';
import QuestionnaireInput from './AddProjectComponents/QuestionnaireInput';
import TestsInput from './AddProjectComponents/TestsInput';
import Section from './UI/Section';

const AddProject = () => {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [tests, setTests] = useState([]);
	const [preQuestionnaire, setPreQuestionnaire] = useState([]);
	const [postQuestionnaire, setPostQuestionnaire] = useState([]);

	// Delete test
	const handleTestDelete = ind => {
		setTests(tests.filter((item, index) => ind != index));
	};

	// Delete question
	const handleQuestionDelete = (ind, type) => {
		if (type === 'post') setPostQuestionnaire(postQuestionnaire.filter((item, index) => ind != index));
		setPreQuestionnaire(preQuestionnaire.filter((item, index) => ind != index));
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<Section padding='20px 20px 80px 20px' title='Add Project'>
			{/* TITLE */}
			<div className='formField'>
				<h4>Project title</h4>
				<input type='text' placeholder='Project title' onChange={e => setTitle(e.target.value)} />
			</div>

			{/* URL */}
			<div className='formField'>
				<h4>URL</h4>
				<input type='text' placeholder='https://example.com' onChange={e => setUrl(e.target.value)} />
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

			{/* STYLE */}
			<style jsx>{``}</style>
		</Section>
	);
};

export default AddProject;
