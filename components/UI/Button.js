import React from 'react';
import classnames from 'classnames';
import WithLink from './withLink';

const Button = ({ type = 'button', bold = false, children, onClick, loading, filled = false, linkHref }) => {
	return (
		<WithLink className='linkButton' link={linkHref}>
			{type === 'text' ? (
				<span className='button' onClick={onClick}>
					{children}
				</span>
			) : (
				<button className={classnames(['button', { filled }])} onClick={onClick}>
					{children}
				</button>
			)}

			{/* STYLE */}
			<style jsx>{`
				span {
					text-decoration: underline;
					font-weight: ${bold ? 'bold' : 'normal'};
				}
				button {
					border: 2px solid var(--primaryColor);
					padding: 8px 12px;
					border-radius: 5px;
					font-weight: bold;
					background: none;
					color: var(--primaryColor);
					cursor: pointer;
					transition: transform linear 0.1s;
				}

				button:hover {
					transform: scale(1.1);
				}

				:global(.linkButton) button {
					width: 100%;
				}

				.filled {
					background: var(--primaryColor);
					color: #fff;
				}
			`}</style>
		</WithLink>
	);
};

export default Button;
