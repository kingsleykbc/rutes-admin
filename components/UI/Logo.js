import React from 'react';
import { HiOutlineBeaker as IcLogo } from 'react-icons/hi';
import WithLink from './withLink';

const Logo = ({ size, showText = true, responsiveShowText = true, responsiveWidth = '800px', withLink = true }) => {
	return (
		<WithLink link={withLink ? '/' : null}>
			<div className='Logo'>
				<IcLogo />
				{showText && <h3>RUTES</h3>}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Logo {
					display: inline-flex;
					align-items: center;
					gap: 8px;
				}

				.Logo :global(svg) {
					font-size: 2rem;
					color: var(--primaryColor);
				}

				@media screen and (max-width: ${responsiveWidth}) {
					h3 {
						display: ${responsiveShowText ? 'block' : 'none'};
					}
				}
			`}</style>
		</WithLink>
	);
};

export default Logo;
