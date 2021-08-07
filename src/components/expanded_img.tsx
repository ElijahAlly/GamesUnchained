import React from 'react';
import { collapseImg } from '../actions/image_actions';
import { useAppDispatch } from '../hooks';

export interface ExpandedImgProps {
	src: string;
}

const ExpandedImg: React.FunctionComponent<ExpandedImgProps> = ({ src }) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<section
				className='expanded-background'
				onClick={() => dispatch(collapseImg())}>
				<div className='close-img' onClick={() => dispatch(collapseImg())}>
					x
				</div>
			</section>
			<img src={src} className='expanded-img' draggable={false} />
		</>
	);
};

export default ExpandedImg;
