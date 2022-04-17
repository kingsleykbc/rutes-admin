import React from 'react';
import ClickableIcon from '../../UI/ClickableIcon';
import { MdDelete as IcDelete } from 'react-icons/md';

const TestItem = ({ data, onDelete }) => {
	return (
		<div className='TestItem whiteboard'>
			<div className='topSection'>
				<h4>{data.route}</h4>
				{onDelete && <ClickableIcon icon={<IcDelete color='var(--primaryColor)' />} onClick={onDelete} />}
			</div>
			<ul className='instructions'>
				{data.instructions.map((item, index) => (
					<li key={`instruction_${item}`}>{item}</li>
				))}
			</ul>

			{/* STYLE */}
			<style jsx>{`
				.TestItem {
					margin-bottom: 20px;
					background: var(--faintColor);
				}
				.topSection {
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: var(--border);
					padding-bottom: 10px;
				}

				li {
					list-style-position: inside;
					padding: 15px;
					border-radius: 5px;
					margin-top: 10px;
					box-shadow: var(--boxShadow);
					background: #fff;
				}
			`}</style>
		</div>
	);
};

export default TestItem;
