import { useEffect, useState } from 'react';
import { DEVICE_SCREENS } from '../../../lib/config';

const RouteAnnotations = ({ screenshot, annotations, device }) => {
	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='RouteAnnotations'>
			{annotations.map(item => (
				<Annotation data={item} key={item.id} />
			))}
			<img width={DEVICE_SCREENS[device].width} src={screenshot} alt='Annotation screenshot' />

			{/* STYLE */}
			<style jsx>{`
				.RouteAnnotations {
					flex-grow: 1;
					border-radius: 5px;
					box-shadow: 0 2px 6px rgba(0, 0, 0, 0.17);
					overflow: auto;
					position: relative;
				}
			`}</style>
		</div>
	);
};

export default RouteAnnotations;

const Annotation = ({
	data: {
		point: { mouseX, mouseY },
		message,
		createdAt,
		element: { tag }
	}
}) => {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });

	/**
	 *
	 */
	const handleClick = e => {
		setMouse({ x: e.pageX, y: e.pageY });
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

	return (
		<div style={{ top: mouseY, left: mouseX }} className='Annotation'>
			<div className='annotation_dot'></div>
			<div className='annotation_details'>
				<div className='topSection'>
					<h4>{tag} annotation</h4>
				</div>
				<p className='lightText'>{message}</p>
				<span>{new Date(createdAt).toLocaleString()}</span>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Annotation {
					position: absolute;
					z-index: 1000;
					cursor: pointer;
				}
				.annotation_dot {
					position: absolute;
					top: 0;
					left: 0;
					width: 25px;
					height: 25px;
					z-index: 200;
					border-radius: 20px;
					background: #fff;
					box-shadow: var(--boxShadow);
					border: 7px solid var(--primaryColor);
				}

				.annotation_details {
					position: absolute;
					top: 15px;
					left: 15px;
					background: #fff;
					box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
					padding: 10px;
					font-size: 0.9rem;
					display: none;
					width: 200px;
					border-radius: 5px;
				}

				.annotation_details p {
					margin: 5px 0;
					padding: 8px 0;
					border-top: var(--border);
					border-bottom: var(--border);
				}

				.annotation_details span {
					font-weight: bold;
					color: var(--lightText);
					font-size: 0.8rem;
				}

				.Annotation:hover .annotation_details {
					display: block;
				}

				.Annotation .topSection {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.cancel {
					font-weight: bold;
					font-size: 1.3rem;
					margin-top: -3px;
					color: var(--primaryColor);
				}
			`}</style>
		</div>
	);
};
