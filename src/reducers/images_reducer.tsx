import { EXPAND_IMAGE, COLLAPSE_IMAGE } from '../actions/image_actions';

interface ActionPayload {
	type: string;
	[src: string]: string;
}

interface Initial {
	img: string;
}

const _InitialState: Initial = { img: '' };

export default (state = _InitialState, action: ActionPayload) => {
	Object.freeze(state);
	const newState = Object.assign({}, state);

	switch (action.type) {
		case EXPAND_IMAGE:
			newState.img = action.src;
			return newState;
		case COLLAPSE_IMAGE:
			newState.img = '';
			return newState;
		default:
			return state;
	}
};
