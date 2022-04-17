import React from 'react';
import ButtonLightbox from '../UI/ButtonLightbox';
import Container from '../UI/Container';
import EmptySet from '../UI/EmptySet';
import AddQuestion from './QuestionnaireInputComponents/AddQuestion';
import QuestionItem from './QuestionnaireInputComponents/QuestionItem';

const QuestionnaireInput = ({ type = 'Pre', onChange, data, onDelete }) => {
	return (
		<div className='QuestionnaireInput'>
			<div className='topSection'>
				<h4>{type}-session questionnaire </h4>
				<p>Enter the list of questions the users should answer {type === 'Pre' ? 'before' : 'after'} the sessions. </p>
			</div>

			{/* QUESTIONS */}
			<Container margin='20px 0' className='questionsList'>
				<EmptySet data={data} margin='0'>
					No questions added
				</EmptySet>
				{data.map((item, index) => (
					<QuestionItem key={item.question + index + 'qil'} data={item} onDelete={() => onDelete(index)} />
				))}
			</Container>

			{/* ADD QUESTION */}
			<Container align='center'>
				<ButtonLightbox label='Add Question'>
					{({ toggle }) => <AddQuestion toggle={toggle} onAdd={question => onChange([...data, question])} />}
				</ButtonLightbox>
			</Container>

			{/* STYLE */}
			<style jsx>{`
				.QuestionnaireInput {
					margin: 25px 0;
				}

				p {
					margin-top: 10px;
					color: var(--lightText);
				}
			`}</style>
		</div>
	);
};

export default QuestionnaireInput;
