import React from 'react';
import RouteAnnotations from '../AnnotationsComponents/RouteAnnotations';
import { annotations as annotationsResult } from '../../../dummybase';

const Annotations = () => {
	return (
		<div className='subSection'>
			<h3 className='title'>Annotations</h3>
			<RouteAnnotations screenshot={annotationsResult[0].screenshot} annotations={annotationsResult[0].annotations} />
		</div>
	);
};

export default Annotations;
