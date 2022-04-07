// Parent
const Parent = () => {
	const [child, setChild] = useState({
		name: 'Jack',
		grandChild: {
			name: 'John'
		}
	});

	return (
		<div>
			<Child data={child} onChange={newChild => setChild(newChild)} />
		</div>
	);
};

// Child
const Child = props => {
	const handleChange = newGrandChild => {
		props.onChange({ name: props.data.name, grandChild: newGrandChild });
	};

	return (
		<div>
			<GrandChild data={props.data.grandChild} onChange={handleChange} />
		</div>
	);
};

// Grand Child
const GrandChild = props => {
	const handleChange = e => {
		props.onChange({ name: e.target.name });
	};

	return (
		<div>
			<input type='text' onChange={handleChange} />
		</div>
	);
};
