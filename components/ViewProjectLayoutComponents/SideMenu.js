import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../UI/Button';
import { HiOutlineAnnotation as IcAnnotation } from 'react-icons/hi';
import { VscFeedback as IcFeedback } from 'react-icons/vsc';
import { IoIosChatboxes as IcChat } from 'react-icons/io';
import { AiOutlineQuestionCircle as IcQuestion } from 'react-icons/ai';
import ActiveLink from '../UI/ActiveLink';

const SideMenu = () => {
	const { query } = useRouter();

	return (
		<div className='SideMenu'>
			<div className='menu'>
				<MenuItem icon={<IcAnnotation />} label='Annotations' path='/annotations' />
				<MenuItem icon={<IcFeedback />} label='Feedback' path='/feedback' />
				<MenuItem icon={<IcChat />} label='Chat' path='/chat' />
				<MenuItem icon={<IcQuestion />} label='Questionnaire Responses' path='/responses' />
			</div>

			<Button href={`/view/${query.projectID}/individual`}>Individual Session</Button>

			{/* STYLE */}
			<style jsx>{`
				.SideMenu {
					padding: 15px;
					height: 100%;
					display: flex;
					flex-direction: column;
					gap: 20px;
				}

				.menu {
					flex-grow: 1;
				}
			`}</style>
		</div>
	);
};

export default SideMenu;

const MenuItem = ({ icon, label, path }) => {
	const { query } = useRouter();

	return (
		<ActiveLink className='MenuItem' href={`/view/${query.projectID}${path}`}>
			<div className='icon'>{icon}</div>
			<span>{label}</span>

			{/* STYLE */}
			<style jsx>{`
				:global(.MenuItem) {
					display: flex;
					align-items: center;
					padding: 15px;
					gap: 17px;
				}

				:global(.MenuItem):first-child {
					border-top: 0;
				}

				:global(.MenuItem):hover {
					background: rgba(255, 255, 255, 0.616);
				}

				:global(.MenuItem.active) {
					background: #fff;
					border-radius: 5px;
					border-left: 5px solid var(--primaryColor);
					box-shadow: var(--boxShadow);
				}

				.icon {
					font-size: 1.6rem;
					margin-bottom: -4px;
				}

				.icon :global(svg) {
					color: var(--primaryColor);
				}
			`}</style>
		</ActiveLink>
	);
};
