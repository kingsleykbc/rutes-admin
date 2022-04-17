import React from 'react';
import Notifications from './HomeComponents/Notifications';
import Projects from './HomeComponents/Projects';

const Home = () => {
	return (
		<div className='Home'>
			{/* <Notifications /> */}
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
