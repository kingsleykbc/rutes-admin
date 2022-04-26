import React from 'react';
import Projects from './HomeComponents/Projects';

/**
 * HOME PAGE: PROJECT LIST
 */
const Home = () => {
	return (
		<div className='Home'>
			<Projects />

			{/* STYLE */}
			<style jsx>{`
				:global(body) {
					background: var(--faintColor);
					padding-bottom: 70px;
				}
			`}</style>
		</div>
	);
};

export default Home;
