import React from 'react';
import { GoChevronRight as IcGo } from 'react-icons/go';
import { HiOutlineBeaker as IcProject } from 'react-icons/hi';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { GiProgression as IcProgress } from 'react-icons/gi';
import Link from 'next/link';

const ProjectListItem = ({ data }) => {
	return (
		<Link href={`/view/${data._id}/annotations`}>
			<a className='ProjectListItem'>
				<div className='icon leading'>
					<IcProject />
				</div>

				<div className='details'>
					<h3>{data.title}</h3>
					<p>{data.description}</p>

					<div className='stats'>
						<Stat icon={<IcUser />}>{data.noParticipants} participants</Stat>
						<Stat icon={<IcProgress />}>50% complete</Stat>
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

const Stat = ({ icon, children }) => {
	return (
		<div className='Stat'>
			{icon}
			{children}

			{/* STYLE */}
			<style jsx>{`
				.Stat {
					display: inline-flex;
					margin-right: 12px;
					gap: 10px;
					font-size: 0.95rem;
					align-items: center;
					background: var(--highlightColor);
					border-radius: 50px;
					padding: 4px 15px;
				}
			`}</style>
		</div>
	);
};
