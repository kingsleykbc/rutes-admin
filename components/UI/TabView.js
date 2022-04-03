import { useState } from 'react';
import classnames from 'classnames';

const TabView = ({ tabs, onChange, content, children }) => {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	/**
	 * ON CLICK ON NEW TAB
	 */
	const handleChange = newSelectedTab => {
		setSelectedTab(newSelectedTab);
		if (onChange) onChange(newSelectedTab);
	};

	return (
		<div className='TabView'>
			{/* TABS */}
			<div className='tabs'>
				{tabs.map((item, index) => (
					<div className={classnames(['tab', { active: item === selectedTab }])} onClick={() => handleChange(item)} key={item + index}>
						{item}
					</div>
				))}
			</div>

			{/* CONTENT (FUNCTIONAL CHILD) */}
			{children && children({ view: selectedTab, setView: setSelectedTab })}

			{/* CONTENT (TABBED) */}
			{content && <div className='content'>{content[tabs.indexOf(selectedTab)]}</div>}

			{/* STYLE */}
			<style jsx>{`
		
				.tabs {
					display: flex;
					width: 100%;
				}
				.tab {
					flex-grow: 1;
					padding: 10px;
					text-align: center;
					cursor: pointer;
					padding: 20px 25px;
					border-bottom: 5px solid transparent;
				}
				.tab.active {
					border-bottom-color: var(--primaryColor);
				}
			`}</style>
		</div>
	);
};

export default TabView;
