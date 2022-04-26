import React from 'react';
import Spinner from './Spinner';
import { BiErrorAlt as IcError } from 'react-icons/bi';

const LoadablePage = ({ states: { error, loading }, errorMessage, loadingMessage }) => {
	if (loading) return <BlankPage message={loadingMessage || 'Loading data...'} />;
	if (error)
		return (
			<>
				<pre>{JSON.stringify(error, null, 2)}</pre>
				<BlankPage type='error' message={errorMessage || error.message} />
			</>
		);
};

export default LoadablePage;

export const BlankPage = ({ icon, type = 'loading', message = 'Loading data', subMessage }) => {
	return (
		<div className='BlankPage'>
			<div className='icon'>
				{icon || (type === 'loading' ? <Spinner margin='0 0 15px 0' scale={2} /> : <IcError size={59} color='var(--primaryColor)' />)}
			</div>
			<h3>{message}</h3>
			<p className='lightText'>{subMessage || (type === 'loading' ? 'Please wait while the data is fetched' : 'Please try again later')}</p>

			{/* STYLE */}
			<style jsx>{`
				.BlankPage {
					max-width: 800px;
					padding: 20px;
					margin: 20vh auto;
					text-align: center;
				}

				h3 {
					margin: 20px 0 10px 0;
				}
			`}</style>
		</div>
	);
};
