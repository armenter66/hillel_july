import { ADD_TODO } from './actions';

const initialState = {
	list: [],
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case 'SET_TODOS':
			return {
				...state,
				list: action.payload,
			};
	}
	return state;
};
