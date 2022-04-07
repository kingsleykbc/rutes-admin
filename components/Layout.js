import React from 'react';
import Header from './LayoutComponents/Header';

const Layout = ({ children }) => {
	return (
		<div>
			<div id="portal"></div>
			<Header />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
