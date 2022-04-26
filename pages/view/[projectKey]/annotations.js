import React from 'react';
import Annotations from '../../../components/ViewProjectComponents/Annotations';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const annotations = () => {
	return <ViewProjectLayout>{(data, refresh) => <Annotations data={data} refresh={refresh} />}</ViewProjectLayout>;
};

export default annotations;
