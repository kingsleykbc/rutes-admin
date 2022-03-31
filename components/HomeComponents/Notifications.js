import React from 'react';
import { MdNotificationsActive as IcBell } from 'react-icons/md';
import Button from '../UI/Button';

const Notifications = () => {
	return (
		<div className='Notifications'>
			<div className='icon'>
				<IcBell />
			</div>
			<p>You have 15 messages from 13 participants</p>
			<Button type='text' bold>
				More
			</Button>

			{/* STYLE */}
			<style jsx>{`
				.Notifications {
					display: flex;
					max-width: 760px;
					margin: auto;
					align-items: center;
					gap: 20px;
					padding: 15px 30px;
					background: var(--primaryColor);
					border-radius: 5px;
					color: #fff;
					margin-top: 30px;
				}

				p {
					flex-grow: 1;
				}

				.icon {
					font-size: 1.9rem;
					margin-bottom: -6px;
				}
			`}</style>
		</div>
	);
};

export default Notifications;
