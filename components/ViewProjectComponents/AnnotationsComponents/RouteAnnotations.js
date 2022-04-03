import React from 'react';

const RouteAnnotations = ({ screenshot, annotations }) => {
	return (
		<div>
			<div className='screenshot'>
				<div className='overlay'>{/* IMPLEMENT OVERLAY HERE */}</div>
				<img src={screenshot} alt='Annotation screenshot' />
			</div>
			<div className='controls'>
				<div className='controlButton'>Previous</div>
				<div className='controlButton'>Next</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.screenshot {
					box-shadow: var(--boxShadow);
          border-radius: 5px;
          margin-bottom: 30px;
				}

				img {
					width: 100%;
				}

				.controls {
					border-radius: 50px;
					box-shadow: var(--boxShadow);
					display: flex;
					background: var(--borderColor);
					gap: 1px;
					overflow: hidden;
				}

				.controlButton {
					flex-grow: 1;
					flex-basis: 48%;
					background: #fff;
					padding: 20px;
					text-align: center;
					font-weight: bold;
					cursor: pointer;
					transition: background linear 0.1s;
				}

				.controlButton:hover {
					background: var(--highlightColor);
				}
			`}</style>
		</div>
	);
};

export default RouteAnnotations;
