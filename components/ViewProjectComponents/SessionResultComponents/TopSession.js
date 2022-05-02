import React from 'react';
import { HiOutlineDesktopComputer as IcSession } from 'react-icons/hi';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { GiProgression as IcProgress } from 'react-icons/gi';

import ListItemStat from '../../UI/ListItemStat';

const TopSession = ({ data }) => {
	return (
		<div className='TopSection'>
			<div className='icon'>
				<IcSession />
			</div>
			<div className='details'>
				<h3>Session</h3>
				<div className='stats'>
					<ListItemStat icon={<IcUser />}>{data.testerEmail}</ListItemStat>
					<ListItemStat icon={<IcProgress />}>{data.progress}%</ListItemStat>
				</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.TopSection {
					bottom: 200px;
					display: flex;
					gap: 20px;
					align-items: center;
				}

				.stats {
					margin-top: 15px;
				}

				.details {
					flex-grow: 1;
				}

				.icon :global(svg) {
					font-size: 3rem;
					color: var(--primaryColor);
				}
			`}</style>
		</div>
	);
};

export default TopSession;
