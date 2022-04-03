import React, { useState } from 'react';
import { annotations as annotationsResult } from '../../dummybase';
import Section from '../UI/Section';
import { HighlightedText, IconText } from '../UI/TextComponents';
import RouteAnnotations from './AnnotationsComponents/RouteAnnotations';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { HiOutlineAnnotation as IcAnnotation } from 'react-icons/hi';

const Annotations = () => {
	const [testRouteIndex, setTestRouteIndex] = useState(0);
	const selectedAnnotationResult = annotationsResult[testRouteIndex];

	return (
		<Section maxWidth='900px'>
			{/* TOP MENU */}
			<div className='topMenu'>
				<HighlightedText>{selectedAnnotationResult.route} </HighlightedText>
				<div>
					<IconText isSmallText icon={<IcUser />}>
						10 total participants
					</IconText>
					<IconText isSmallText icon={<IcAnnotation />}>
						13 total annotations
					</IconText>
				</div>
			</div>

			{/* ANNOTATIONS */}
			<RouteAnnotations screenshot={selectedAnnotationResult.screenshot} annotations={selectedAnnotationResult.annotations} />

			{/* STYLE */}
			<style jsx>{`
				.topMenu {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20px;
				}
			`}</style>
		</Section>
	);
};

export default Annotations;
