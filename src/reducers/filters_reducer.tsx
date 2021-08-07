import { ADD_FILTER, REMOVE_FILTER } from '../actions/filter_actions';

interface ActionPayload {
	type: string;
	where: string;
	[x: string]: any;
}

export interface FiltersState {
	[category: string]: string[];
	platform: string[];
	sortBy: string[];
}

const _initialState: FiltersState = {
	category: [],
	platform: [],
	sortBy: [],
};

export default (state = _initialState, action: ActionPayload) => {
	Object.freeze(state);
	const newState: FiltersState = Object.assign({}, state);

	switch (action.type) {
		case ADD_FILTER:
			if (action.where !== 'category') {
				newState[action.where] = [];
			}
			newState[action.where].push(action.filter);
			return newState;
		case REMOVE_FILTER:
			const newArr: string[] = [];
			newState[action.where].forEach((filter: string) => {
				if (filter !== action.filter) newArr.push(filter);
			});
			newState[action.where] = newArr;
			return newState;
		default:
			return state;
	}
};
