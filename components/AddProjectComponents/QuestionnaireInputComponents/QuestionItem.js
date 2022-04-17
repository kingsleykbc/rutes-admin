import React from 'react';
import { RiQuestionnaireLine as IcTextQuestion } from 'react-icons/ri';
import { FaList as IcMultiChoiceQuestion } from 'react-icons/fa';
import { MdDelete as IcDelete } from 'react-icons/md';
import ClickableIcon from '../../UI/ClickableIcon';

const QuestionItem = ({ data, onDelete }) => {
	return (
		<div className='QuestionItem whiteboard'>
			<div className='topSection'>
				<div className='icon'>{data.questionType === 'text' ? <IcTextQuestion /> : <IcMultiChoiceQuestion />}</div>
				<p>{data.question}</p>
				{onDelete && <ClickableIcon hasShadow icon={<IcDelete color='var(--primaryColor)' />} onClick={onDelete} />}
			</div>

			{data.questionType === 'multi-choice' && (
				<div className='options'>
					<h4>Options</h4>
					<ul>
						{data.options.map((item, index) => (
							<li key={`${data.question}_${item}_${index}`} className='whiteboard'>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* STYLE */}
			<style jsx>{`
				.QuestionItem {
					margin-bottom: 15px;
				}

				.topSection {
					display: flex;
					align-items: center;
					gap: 15px;
				}

				.icon {
					font-size: 2.5rem;
					margin-bottom: -10px;
				}

				.icon :global(svg) {
					color: var(--primaryColor);
				}

				h4 {
					margin: 20px 0 10px 0;
				}

				li {
					background: var(--faintColor);
					margin-bottom: 10px;
				}

				p {
					flex-grow: 1;
				}
			`}</style>
		</div>
	);
};

export default QuestionItem;
