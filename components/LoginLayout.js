import Link from 'next/link';
import classnames from 'classnames';
import React from 'react';
import Logo from './UI/Logo';
import { useRouter } from 'next/router';

const LoginLayout = ({ children }) => {
	const { asPath } = useRouter();

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='LoginLayout'>
			<div className='loginBox'>
				<div className='logo'>
					<Logo />
				</div>
				<nav>
					<Link href='/login'>
						<a className={classnames({ active: asPath === '/login' })}>Login</a>
					</Link>
					<Link href='/signup'>
						<a className={classnames({ active: asPath === '/signup' })}>Sign up</a>
					</Link>
				</nav>
				<div className='content'>{children}</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.LoginLayout {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					min-height: 100%;
					padding: 20px;
					padding-bottom: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: var(--faintColor);
				}
				.logo {
					text-align: center;
					margin-bottom: 15px;
				}
				.loginBox {
					width: min(100%, 500px);
					margin: auto;
					padding: 15px;
					background: #fff;
					border-radius: 5px;
				}
				nav {
					display: flex;
					gap: 10px;
				}
				nav a {
					flex-grow: 1;
					text-align: center;
					padding: 10px 15px;
					border-radius: 5px;
					cursor: pointer;
					font-weight: bold;
					background: var(--faintColor);
				}
				nav .active {
					background: var(--primaryColor);
					color: #fff;
				}

				.LoginLayout :global(button) {
					display: block;
					margin: 20px auto;
				}

				.content {
					margin-top: 20px;
				}

				@media screen and (min-width: 800px) {
					.loginBox {
						box-shadow: var(--boxShadow);
					}
				}
			`}</style>
		</div>
	);
};

export default LoginLayout;
