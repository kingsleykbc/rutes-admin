import React from 'react';

const Spinner = ({ margin = '0', scale = 1, color = 'var(--primaryColor)' }) => {
	return (
		<div className='SpinnerContainer'>
			<div className='Spinner'></div> {/* STYLE */}
			<style jsx>{`
				.SpinnerContainer {
					display: inline-block;
					transform: scale(${scale});
					margin: ${margin};
				}
				.Spinner {
					position: relative;
					left: -9999px;
					width: 10px;
					height: 10px;
					border-radius: 50px;
					background-color: ${color};
					color: ${color};
					box-shadow: 9984px 0 0 0 ${color}, 9999px 0 0 0 ${color}, 10014px 0 0 0 ${color};
					animation: dotCarousel 1.5s infinite linear;
				}

				@keyframes dotCarousel {
					0% {
						box-shadow: 9984px 0 0 -1px ${color}, 9999px 0 0 1px ${color}, 10014px 0 0 -1px ${color};
					}
					50% {
						box-shadow: 10014px 0 0 -1px ${color}, 9984px 0 0 -1px ${color}, 9999px 0 0 1px ${color};
					}
					100% {
						box-shadow: 9999px 0 0 1px ${color}, 10014px 0 0 -1px ${color}, 9984px 0 0 -1px ${color};
					}
				}
			`}</style>
		</div>
	);
};

export default Spinner;

// import React from 'react';

// const Spinner = ({ scale = 1.5, color = 'var(--primaryColor)' }) => {
// 	return (
// 		<div className='Spinner'>
// 			{/* STYLE */}
// 			<style jsx>{`
// 				.Spinner {
// 					position: relative;
// 					width: 10px;
// 					transform: scale(2);
// 					height: 10px;
// 					border-radius: 5px;
// 					background-color: ${color};
// 					color: ${color};
// 					animation: dotFlashing 1s infinite linear alternate;
// 					animation-delay: 0.5s;
// 				}

// 				.Spinner::before,
// 				.Spinner::after {
// 					content: '';
// 					display: inline-block;
// 					position: absolute;
// 					top: 0;
// 				}

// 				.Spinner::before {
// 					left: -15px;
// 					width: 10px;
// 					height: 10px;
// 					border-radius: 5px;
// 					background-color: ${color};
// 					color: ${color};
// 					animation: dotFlashing 1s infinite alternate;
// 					animation-delay: 0s;
// 				}

// 				.Spinner::after {
// 					left: 15px;
// 					width: 10px;
// 					height: 10px;
// 					border-radius: 5px;
// 					background-color: ${color};
// 					color: ${color};
// 					animation: dotFlashing 1s infinite alternate;
// 					animation-delay: 1s;
// 				}

// 				@keyframes dotFlashing {
// 					0% {
// 						opacity: 1;
// 					}
// 					50%,
// 					100% {
// 						opacity: 0.5;
// 					}
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

// export default Spinner;
