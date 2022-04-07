import React from 'react';
import { RiQuestionnaireLine as IcTextQuestion } from 'react-icons/ri';
import { FaList as IcMultiChoiceQuestion } from 'react-icons/fa';

const QuestionnaireResponse = ({ data }) => {
	const { questionType } = data;

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponse'>
			{/* QUESTION SECTION */}
			<div className='question'>
				<div className='icon'>{questionType === 'text' ? <IcTextQuestion /> : <IcMultiChoiceQuestion />}</div>
				<h4>{data.question}</h4>
			</div>

			{/* ANSWER SECTION */}
			<div className='answer'>
				{data.answers.map((item, index) =>
					questionType === 'text' ? (
						<TextResponse key={`textanswer_${index}`} data={item} />
					) : (
						<MultiChoiceResponse key={`mcanswer_${index}`} data={item} />
					)
				)}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.QuestionnaireResponse {
					box-shadow: var(--boxShadow);
					border-radius: 5px;
					margin-bottom: 20px;
					padding: 20px;
					background: #fff;
				}

				.question {
					display: flex;
					align-items: center;
					gap: 20px;
					margin-bottom: 25px;
				}

				.icon :global(svg) {
					color: var(--primaryColor);
					font-size: 2.3rem;
					margin-bottom: -10px;
				}
			`}</style>
		</div>
	);
};

export default QuestionnaireResponse;

const TextResponse = ({ data: { testerName, answer, timeAnswered } }) => {
	return (
		<div className='TextResponse'>
			<p>{answer}</p>
			<div className='details'>
				<span>{testerName}</span> - <span>{new Date(timeAnswered).toLocaleString()}</span>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.TextResponse {
					box-shadow: var(--boxShadow);
					background: var(--faintColor);
					margin-top: 10px;
					border-radius: 5px;
					padding: 15px;
				}

				.details {
					display: flex;
					gap: 5px;
					font-size: 0.9rem;
					margin-top: 15px;
				}
			`}</style>
		</div>
	);
};

const MultiChoiceResponse = ({ data: { option, percentage } }) => {
	return (
		<div className='MultiChoiceResponse'>
			<p className='option'>{option}</p>
			<div className='percentage'>
				<div className='bar'></div>
				<p>{percentage.toFixed(1)}%</p>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.MultiChoiceResponse {
					max-width: 500px;
					margin: 10px auto;
				}
				.percentage {
					display: flex;
					align-items: center;
					gap: 20px;
				}
				.option {
					max-width: 100px;
				}
				.bar {
					height: 5px;
					background: var(--highlightColor);
					flex-grow: 1;
					border-radius: 10px;
					position: relative;
				}
				.bar::before {
					content:"";
					height: 5px;
					position: absolute;
					top: 0;
					left: 0;
					width: ${percentage}%;
					background: var(--primaryColor);
				}
			`}</style>
		</div>
	);
};
