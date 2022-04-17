import React from 'react';
import Logo from '../UI/Logo';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { GoChevronDown as IcArrowDown } from 'react-icons/go';
import { BsSearch as IcSearch } from 'react-icons/bs';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../UI/Button';
import { useSearch } from '../../contexts/SearchContext';

const Header = () => {
	const { user, logout } = useAuth();
	const { keyword, setKeyword } = useSearch();

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='Header'>
			<Logo responsiveShowText={false} />

			{/* SEARCH BAR */}
			<div className='searchBar'>
				<IcSearch />
				<input value={keyword}  type='search' onChange={({ target: { value } }) => setKeyword(value)} placeholder='Search Projects' />
			</div>

			{/* ACCOUNT SECTION */}
			<Account user={user} logout={logout} />

			{/* STYLE */}
			<style jsx>{`
				.Header {
					display: flex;
					align-items: center;
					position: sticky;
					top: 0;
					left: 0;
					width: 100%;
					padding: 8px 10px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
					background: #fff;
					gap: 10px;
					z-index: 1000;
					justify-content: space-between;
				}

				.searchBar {
					display: flex;
					gap: 15px;
					padding-left: 12px;
					align-items: center;
					flex-grow: 1;
					max-width: 500px;
					text-align: center;
					border: 1px solid #c4c4c4;
					border-radius: 5px;
				}

				.searchBar :global(svg) {
					font-size: 1.2rem;
				}

				input {
					display: inline-block;
					width: 100%;
					border: none;
					background: none;
					padding: 8px 12px;
				}
			`}</style>
		</div>
	);
};

export default Header;

const Account = ({ user, logout }) => {
	return (
		<div className='account'>
			<IcUser />
			<h4>{user.fullName}</h4>
			<IcArrowDown />

			<div className='fullAccount'>
				<div className='box'>
					<p>{user.email}</p>
					<Button onClick={logout}>Logout</Button>
				</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.account {
					display: flex;
					align-items: center;
					cursor: pointer;
					position: relative;
				}

				.account h4 {
					margin: 0 5px 0 15px;
				}

				.account :global(svg) {
					font-size: 1.5rem;
					opacity: 0.5;
				}
				.fullAccount {
					position: absolute;
					top: 100%;
					right: 0;
					display: none;
				}

				.account:hover .fullAccount {
					display: block;
				}

				.fullAccount .box {
					background: #fff;
					box-shadow: var(--boxShadow);
					padding: 15px;
					margin-top: 20px;
					border-radius: 5px;
				}

				.fullAccount :global(button) {
					width: 100%;
					margin-top: 20px;
				}
			`}</style>
		</div>
	);
};
