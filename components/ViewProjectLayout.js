import { useState } from 'react';
import classnames from 'classnames';
import useWindowSize from '../hooks/useWindowSize';
import { GiHamburgerMenu as IcToggle } from 'react-icons/gi';
import SideMenu from './ViewProjectLayoutComponents/SideMenu';

const ViewProjectLayout = ({ children }) => {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	const { height } = useWindowSize();

	return (
		<div className={classnames(['ViewProjectLayout', { sidebarOff: toggleSidebar }])}>
			{/* TOGGLE ICON */}
			<div className='toggleButton' onClick={() => setToggleSidebar(!toggleSidebar)}>
				<IcToggle />
			</div>

			{/* SIDEBAR */}
			<aside>
				<SideMenu />
			</aside>

			{/* CONTENT */}
			<div className='content'>{children}</div>

			{/* STYLE */}
			<style jsx>{`
				aside {
					height: calc(${height + ' - '} 56px);
					position: fixed;
					top: 56px;
					left: 0;
					width: 300px;
					background: var(--faintColor);
					overflow: auto;
					z-index: 100;
					margin-left: 0;
				}

				.content {
					overflow: auto;
					position: relative;
					left: 300px;
					width: calc(100% - 300px);
					padding-bottom: 50px;
					background: var(--faintColor);
					min-height: calc(${height + ' - '} 56px);
				}

				aside,
				.content {
					transition: all ease-out 0.12s;
				}

				.toggleButton {
					width: 45px;
					height: 45px;
					border-radius: 5px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1.5rem;
					cursor: pointer;
					margin: 10px;
					position: fixed;
					z-index: 200;
					background: #fff;
					box-shadow: var(--boxShadow);
					display: none;
				}

				@media screen and (max-width: 800px) {
					.sidebarOff aside {
						margin-left: -300px;
					}

					.sidebarOff .content {
						left: 0;
						width: 100%;
					}

					.content {
						left: 0;
						width: 100%;
					}

					.toggleButton {
						display: flex;
					}

					.content,
					aside {
						padding-top: 70px;
						box-shadow: var(--boxShadow);
					}
				}
			`}</style>
		</div>
	);
};

export default ViewProjectLayout;
