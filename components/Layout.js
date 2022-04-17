import React from 'react';
import Header from './LayoutComponents/Header';

const Layout = ({ children, user }) => {
	return (
		<div>
			<div id='portal'></div>
			<Header user={user} />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
