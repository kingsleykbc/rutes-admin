import { useState } from 'react';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import MultiTextInput from '../../UI/MultiTextInput';

const AddQuestion = ({ toggle, onAdd }) => {
	const [questionType, setQuestionType] = useState('text');
	const [question, setQuestion] = useState('');
	const [options, setOptions] = useState([]);

	/**
	 * HANDLE ADD QUESTION
	 */
	const handleAddQuestion = () => {
		const data = { questionType, question, options };
		const errorMessage = validate(data);

		if (errorMessage) {
			alert(errorMessage);
			return;
		}

		if (data.questionType === 'text') delete data.options;

		onAdd(data);
		reset();
		toggle();
	};

	/**
	 * VALIDATE
	 */
	const validate = data => {
		if (!data.question) return 'Please enter a valid question.';
		if (data.questionType === 'multi-choice' && data.options.length === 0)
			return 'Please enter at lease one option for the multiple choice question';
	};

	/**
	 * RESET
	 */
	const reset = () => {
		setQuestion('');
		setOptions([]);
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='AddQuestion'>
			{/* TYPE */}
			<div className='formField'>
				<h4>Question Type</h4>
				<select value={questionType} onChange={e => setQuestionType(e.target.value)}>
					<option value='text'>Text</option>
					<option value='multi-choice'>Multiple choice</option>
				</select>
			</div>

			{/* QUESTION */}
			<div className='formField'>
				<h4>Question</h4>
				<input value={question} type='text' placeholder='Question' onChange={e => setQuestion(e.target.value)} />
			</div>

			{/* OPTIONS (FOR MULTIPLE CHOICE) */}
			{questionType === 'multi-choice' && (
				<div>
					<h4>Options</h4>
					<MultiTextInput value={options} onChange={setOptions} />
				</div>
			)}

			{/* SUBMIT BUTTON */}
			<Container padding='10px 0 30px 0' align='center'>
				<Button filled onClick={handleAddQuestion}>
					Add Question
				</Button>
			</Container>
		</div>
	);
};

export default AddQuestion;
