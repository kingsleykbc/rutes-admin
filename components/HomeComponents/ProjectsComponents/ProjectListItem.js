import React from 'react';
import { GoChevronRight as IcGo } from 'react-icons/go';
import { HiOutlineBeaker as IcProject } from 'react-icons/hi';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { BiGlobe as IcURL } from 'react-icons/bi';
import Link from 'next/link';
import ListItemStat from '../../UI/ListItemStat';

const ProjectListItem = ({ data }) => {
	return (
		<Link href={`/view/${data.projectKey}/details`}>
			<a className='ProjectListItem'>
				<div className='icon leading'>
					<IcProject />
				</div>

				<div className='details'>
					<h3>{data.title} </h3>
					<p>{data.description}</p>

					<div className='stats'>
						<ListItemStat icon={<IcUser />}>{data.noParticipants} participants</ListItemStat>
						<ListItemStat icon={<IcURL />}>{data.url}</ListItemStat>
					</div>
				</div>

				<div className='icon go'>
					<IcGo />
				</div>
				{/* STYLE */}
				<style jsx>{`
					.ProjectListItem {
						background: #fff;
						border-radius: 5px;
						margin-bottom: 10px;
						padding: 20px;
						box-shadow: var(--boxShadow);
						display: flex;
						gap: 20px;
						align-items: center;
						cursor: pointer;
						transition: transform linear 0.1s;
					}

					.ProjectListItem:hover {
						transform: scale(1.03);
					}

					.details {
						flex-grow: 1;
					}

					.icon.leading {
						font-size: 2.5rem;
					}

					.leading :global(svg) {
						color: var(--primaryColor);
					}

					.icon.go {
						opacity: 0.3;
						font-size: 1.2rem;
					}

					p {
						margin: 10px 0 20px 0;
						opacity: 0.6;
					}
				`}</style>
			</a>
		</Link>
	);
};

export default ProjectListItem;
