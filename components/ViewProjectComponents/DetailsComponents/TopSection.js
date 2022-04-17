import React from 'react';
import Container from '../../UI/Container';
import { HiOutlineBeaker as IcProject } from 'react-icons/hi';

const TopSection = ({ data }) => {
	return (
		<Container hasBorder borderDirections='b'padding='20px 0'>
			<div className='topSection'>
				<div className='icon'>
					<IcProject size='3rem' color='var(--primaryColor)' />
				</div>
				<div className='details'>
					<h2>{data.title}</h2>
					<p className='lightText'>{data.url}</p>
				</div>
			</div>

			<style jsx>{`
				.topSection {
					display: flex;
					align-items: center;
					gap: 15px;
				}

				.topSection h2 {
					margin-bottom: 5px;
				}
			`}</style>
		</Container>
	);
};

export default TopSection;
