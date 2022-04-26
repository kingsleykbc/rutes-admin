import React from 'react';
import Details from '../../../components/ViewProjectComponents/Details';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const annotations = () => {
	return <ViewProjectLayout>{data => <Details data={data} />}</ViewProjectLayout>;
};

export default annotations;
