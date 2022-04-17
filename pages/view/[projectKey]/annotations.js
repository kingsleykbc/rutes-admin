import React from 'react';
import Annotations from '../../../components/ViewProjectComponents/Annotations';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const annotations = () => {
	return <ViewProjectLayout>{data => <Annotations data={data} />}</ViewProjectLayout>;
};

export default annotations;
