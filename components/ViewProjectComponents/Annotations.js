import React, { useState } from 'react';
import { IconText } from '../UI/TextComponents';
import RouteAnnotations from './AnnotationsComponents/RouteAnnotations';
import { AiOutlineUser as IcUser } from 'react-icons/ai';
import { HiOutlineAnnotation as IcAnnotation } from 'react-icons/hi';
import useWindowSize from '../../hooks/useWindowSize';
import { MdRefresh as IcRefresh } from 'react-icons/md';
import EmptySet from '../UI/EmptySet';

const Annotations = ({ data: { screenshots, sessions }, refresh }) => {
	const { height } = useWindowSize();

	/**
	 * GET DATA
	 */
	const { routes, devices } = getRoutesAndDevices(screenshots);
	const [route, setRoute] = useState(routes[0] || '');
	const [device, setDevice] = useState(devices[0] || '');
	const annotations = getAnnotations(route, device, sessions);
	const { screenshot } = screenshots.find(item => item.device === device && item.route === route) || {};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	if (annotations.length === 0) return <EmptySet>No annotations</EmptySet>;
	return (
		<div className='Annotations'>
			{/* TOP SECTION */}
			<div className='topMenu'>
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

				{/* PARTICIPANT DETAILS */}
				<div>
					<IconText isSmallText icon={<IcUser />}>
						{sessions.length} participants
					</IconText>
					<IconText isSmallText icon={<IcAnnotation />}>
						{annotations.length} annotations
					</IconText>
				</div>
			</div>

			{/* ANNOTATIONS */}
			<RouteAnnotations screenshot={screenshot} annotations={annotations} device={device} />

			{/* REFRESH BUTTON */}
			<div className='refreshButton' onClick={() => refresh()}>
				<IcRefresh size='1.5rem' />
				<span>Refresh Data</span>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Annotations {
					height: calc(${height + ' - '} 56px);
					padding: 20px;
					display: flex;
					flex-direction: column;
				}

				.topMenu {
					display: flex;
					justify-content: space-between;
					margin-bottom: 15px;
				}

				.options {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				select {
					padding: 8px 12px;
				}

				.refreshButton {
					position: fixed;
					bottom: 30px;
					right: 30px;
					border-radius: 5px;
					box-shadow: var(--boxShadow);
					background: var(--primaryColor);
					display: flex;
					align-items: center;
					gap: 10px;
					font-weight: bold;
					padding: 10px 12px;
					color: #fff;
					cursor: pointer;
					transition: transform 0.15s linear;
				}
				.refreshButton:hover {
					transform: scale(1.1);
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
const getAnnotations = (route, device, sessions) => {
	const result = [];
	for (let i = 0; i < sessions.length; i++) {
		const {
			response: { annotations }
		} = sessions[i];
		for (let j = 0; j < annotations.length; j++) {
			const annotation = annotations[j];
			if (annotation.route === route && annotation.device === device) result.push(annotation);
		}
	}
	return result;
};
