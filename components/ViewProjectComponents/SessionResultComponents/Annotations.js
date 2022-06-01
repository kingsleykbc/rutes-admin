import React, { useState } from 'react';
import RouteAnnotations from '../AnnotationsComponents/RouteAnnotations';
import EmptySet from '../../UI/EmptySet';

const Annotations = ({ screenshots, session }) => {
	/**
	 * GET DATA
	 */
	const { routes, devices } = getRoutesAndDevices(screenshots);
	const [route, setRoute] = useState(routes[0] || '');
	const [device, setDevice] = useState(devices[0] || '');
	const annotations = getAnnotations(route, device, session);
	const { screenshot } = screenshots.find(item => item.device === device && item.route === route) || {};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================

	return (
		<div className='subSection'>
			{/* TOP SECTION */}
			<div className='topMenu'>
				<h3 className='title'>Annotations</h3>

				{/* SELECT ROUTE AND DEVICE */}
				<div className='options'>
					<select value={route} onChange={e => setRoute(e.target.value)}>
						{routes.map((item, index) => (
							<option key={`ar_${item + index}`}>{item}</option>
						))}
					</select>
					<select value={device} onChange={e => setDevice(e.target.value)}>
						{devices.map((item, index) => (
							<option key={`ad_${item + index}`}>{item}</option>
						))}
					</select>
				</div>
			</div>

			{/* ANNOTATIONS */}
			{annotations.length === 0 ? (
				<EmptySet>No annotations</EmptySet>
			) : (
				<RouteAnnotations screenshot={screenshot} annotations={annotations} device={device} />
			)}

			{/* STYLE */}
			<style jsx>{`
				.topMenu {
					justify-content: space-between;
				}
				.topMenu,
				.options {
					display: flex;
					align-items: center;
					gap: 10px;
				}
			`}</style>
		</div>
	);
};

export default Annotations;

/**
 * GET ROUTES AND DEVICES
 */
const getRoutesAndDevices = screenshots => {
	let routes = [];
	let devices = [];
	for (let i = 0; i < screenshots.length; i++) {
		const { route, device } = screenshots[i];
		if (!routes.includes(route)) routes.push(route);
		if (!devices.includes(device)) devices.push(device);
	}
	return { routes, devices };
};

/**
 * GET ANNOTATIONS
 */
const getAnnotations = (route, device, session) => {
	const result = [];
	const {
		response: { annotations }
	} = session;
	for (let j = 0; j < annotations.length; j++) {
		const annotation = annotations[j];
		if (annotation.route === route && annotation.device === device) result.push(annotation);
	}
	return result;
};
