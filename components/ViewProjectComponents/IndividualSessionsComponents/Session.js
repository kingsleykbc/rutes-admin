import React from 'react';
import { HiOutlineDesktopComputer as IcSession } from 'react-icons/hi';
import { GoChevronRight as IcGo } from 'react-icons/go';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { GiProgression as IcProgress } from 'react-icons/gi';
import { useRouter } from 'next/router';

import ListItemStat from '../../UI/ListItemStat';
import Link from 'next/link';
const Session = ({ data }) => {
	const { query } = useRouter();
	return (
		<Link href={`/view/${query.projectID}/individualsessions/${data.sessionID}`}>
			<a className='Session whiteboard'>
				<div className='icon'>
					<IcSession />
				</div>
				<div className='details'>
					<h4>Session #{data.sessionID}</h4>
					<div className='stats'>
						<ListItemStat icon={<IcUser />}>{data.testerEmail}</ListItemStat>
						<ListItemStat icon={<IcProgress />}>{data.progress}%</ListItemStat>
					</div>
				</div>
				<div className='goIcon'>
					<IcGo />
				</div>

				{/* STYLE */}
				<style jsx>{`
					.Session {
						margin-bottom: 15px;
						display: flex;
						align-items: center;
						gap: 20px;
						cursor: pointer;
					}
					.details {
						flex-grow: 1;
					}
					.icon :global(svg) {
						color: var(--primaryColor);
						font-size: 2rem;
					}

					.stats {
						margin-top: 15px;
					}
				`}</style>
			</a>
		</Link>
	);
};

export default Session;
