import React from 'react';
import Link from 'next/link';

const WithLink = ({ link, className, children }) =>
	link ? (
		<Link href={link}>
			<a className={className}>
				{children} 
				
				{/* STYLE */}
				<style jsx>{`
					a {
						display: inline-block;
					}
				`}</style>
			</a>
		</Link>
	) : (
		children
	);

export default WithLink;
