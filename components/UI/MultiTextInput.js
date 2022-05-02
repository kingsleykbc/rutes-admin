import React, { useState, useEffect } from 'react';
import EmptySet from './EmptySet';
import { MdDelete as IcDelete } from 'react-icons/md';
import Button from './Button';

const MultiTextInput = ({
	onChange,
	disabled = false,
	value,
	addButtonLabel = 'Add',
	type = 'text',
	placeholder = 'Nothing Added',
	itemPrefix = 'Item'
}) => {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		if (value) setOptions(value);
	}, [value]);

	/**
	 * HANDLE ADD
	 */
	const onAdd = e => {
		e.preventDefault();
		const option = e.target[0].value.trim();
		if (!option) return;
		const newOptions = [...options, option];
		setOptions(newOptions);
		onChange(newOptions);
		e.target[0].value = '';
	};

	/**
	 * HANDLE REMOVE
	 */
	const onRemove = index => {
		const newOptions = options.filter((item, ind) => ind !== index);
		setOptions(newOptions);
		onChange(newOptions);
	};

	const addedOptions = options.map((o, index) => (
		<AddedOption onRemove={() => onRemove(index)} key={`${o}_${index}`} option={o} disabled={disabled} />
	));

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='MultiTextInput'>
			<div className='addedOption'>
				{addedOptions.length ? (
					addedOptions
				) : (
					<EmptySet showIcon={false} margin='0'>
						{placeholder}
					</EmptySet>
				)}
			</div>

			{/* ADD BUTTON */}
			{!disabled && (
				<form onSubmit={onAdd}>
					<input className='MultiTextInputForm' required type={type} placeholder={`${itemPrefix} ${options.length + 1}`} />
					<Button>{addButtonLabel}</Button>
				</form>
			)}

			{/* STYLE */}
			<style jsx>{`
				form {
					display: flex;
					gap: 12px;
					align-items: center;
				}

				input {
					flex-grow: 1;
					margin: 0;
				}

				.addedOption {
					margin: 30px 0;
				}
			`}</style>
		</div>
	);
};

export default MultiTextInput;

const AddedOption = ({ option, onRemove, disabled }) => (
	<div className='option'>
		<div>{option} </div>

		{!disabled && (
			<div className='deleteIcon' onClick={onRemove}>
				<IcDelete color='#fff' />
			</div>
		)}

		{/* STYLE */}
		<style jsx>{`
			.option {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 5px;
				border-radius: 5px;
				margin: 10px 0;
				background: var(--faintColor);
				padding-left: 20px;
			}
			.deleteIcon {
				width: 40px;
				height: 40px;
				border-radius: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: var(--primaryColor);
				font-size: 1.2rem;
				cursor: pointer;
			}
		`}</style>
	</div>
);
