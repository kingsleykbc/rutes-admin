import { useState } from 'react';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import MultiTextInput from '../../UI/MultiTextInput';

const AddTestItem = ({ onAdd, addedRoutes, url, toggle }) => {
	const [route, setRoute] = useState('');
	const [fullRoute, setFullRoute] = useState('');
	const [instructions, setInstructions] = useState([]);

	/**
	 * ADD TEST
	 */
	const addTest = () => {
		const data = { route, fullRoute, instructions };

		//Validate
		const errorMessage = validate(data);
		if (errorMessage) {
			alert(errorMessage);
			return;
		}

		// Add
		onAdd(data);
		reset();
		toggle();
	};

	/**
	 * HANDLE VALIDATION
	 */
	const validate = data => {
		if (!route) return 'Enter the route';

		if (addedRoutes.includes(route)) return 'This route already exists';

		if (instructions.length === 0) return 'Enter at least one instruction';

		return '';
	};

	/**
	 * RESET FORM
	 */
	const reset = () => {
		setRoute('');
		setFullRoute('');
		setInstructions([]);
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='AddTestItem'>
			{/* ROUTE */}
			<div className='formField'>
				<h4>Route</h4>
				<input
					type='text'
					placeholder='/route'
					value={route}
					onChange={e =>
						setRoute(() => {
							let newRoute = e.target.value;
							newRoute = newRoute.charAt(0) === '/' ? newRoute : `/${newRoute}`;
							setFullRoute(`${url}${url.slice(-1) === '/' ? '' : '/'}${newRoute.substring(1)}`);
							return newRoute;
						})
					}
				/>
			</div>

			<div className='formField'>
				<h4>Full URL</h4>
				<input type='text' disabled value={fullRoute} onChange={e => setFullRoute(e.target.value)} />
			</div>

			{/* INSTRUCTIONS */}
			<div className='instructions'>
				<h3>Instructions</h3>
				<div className='instructionsList'>
					<MultiTextInput itemPrefix='Task' onChange={setInstructions} value={instructions} addButtonLabel="Add Task" />
				</div>
			</div>

			{/* SUBMIT BUTTON */}
			<Container align='center' padding='20px'>
				<Button onClick={addTest} filled>
					Add Test
				</Button>
			</Container>
		</div>
	);
};

export default AddTestItem;
